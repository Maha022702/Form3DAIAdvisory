import { NextResponse } from 'next/server';
import { mkdtemp, readFile, rm, writeFile } from 'fs/promises';
import { tmpdir } from 'os';
import path from 'path';
import { randomUUID } from 'crypto';
import { spawn } from 'child_process';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30 MB guardrail
const FREECAD_CMD = process.env.FREECAD_CMD || 'freecadcmd';
const TOLERANCE = parseFloat(process.env.MESH_TO_BREP_TOLERANCE || '0.1');

export async function POST(request: Request) {
  let workDir: string | null = null;

  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'Upload field "file" is required.' }, { status: 400 });
    }

    if (typeof file.size === 'number' && file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `File too large. Max allowed size is ${MAX_FILE_SIZE / (1024 * 1024)} MB.` },
        { status: 413 }
      );
    }

    const id = randomUUID();
    workDir = await mkdtemp(path.join(tmpdir(), `stl-step-${id}-`));

    const inputPath = path.join(workDir, 'input.stl');
    const outputPath = path.join(workDir, 'output.step');
    const scriptPath = path.join(workDir, 'convert.py');

    const inputBuffer = Buffer.from(await file.arrayBuffer());
    await writeFile(inputPath, inputBuffer);
    await writeFile(scriptPath, buildConversionScript());

    await runFreeCADConversion(scriptPath, inputPath, outputPath);
    const stepBuffer = await readFile(outputPath);

    return new NextResponse(stepBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${id}.step"`,
      },
    });
  } catch (error) {
    console.error('STL→STEP conversion failed:', error);
    return NextResponse.json(
      { error: 'Conversion failed. Ensure FreeCAD is installed and the STL is valid.' },
      { status: 500 }
    );
  } finally {
    if (workDir) {
      await rm(workDir, { recursive: true, force: true });
    }
  }
}

function runFreeCADConversion(scriptPath: string, inputPath: string, outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const args = ['--console', '--run', scriptPath, inputPath, outputPath, String(TOLERANCE)];
    const child = spawn(FREECAD_CMD, args, { env: process.env });

    let stderr = '';

    child.stderr.on('data', (data: Buffer) => {
      stderr += data.toString();
    });

    child.on('error', (err) => reject(err));

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`FreeCAD exited with code ${code}. ${stderr}`));
      }
    });
  });
}

function buildConversionScript(): string {
  return [
    'import sys',
    'import Mesh',
    'import Part',
    '',
    'if len(sys.argv) < 4:',
    '    raise SystemExit("Usage: convert.py <input.stl> <output.step> <tolerance>")',
    '',
    'input_path = sys.argv[1]',
    'output_path = sys.argv[2]',
    'tolerance = float(sys.argv[3])',
    '',
    '# Load mesh and turn it into a solid',
    'mesh = Mesh.Mesh(input_path)',
    'shape = Part.Shape()',
    'shape.makeShapeFromMesh(mesh.Topology, tolerance)',
    'solid = Part.makeSolid(shape)',
    'solid = solid.removeSplitter()',
    '',
    '# Export to STEP',
    'Part.export([solid], output_path)',
    'print(f"STEP export complete: {output_path}")',
    ''
  ].join('\n');
}
