import { NextRequest, NextResponse } from 'next/server';
import { unlinkSync, existsSync, writeFileSync } from 'fs';
import { mkdir, rm, writeFile, readFile } from 'fs/promises';
import path from 'path';
import { tmpdir } from 'os';
import { randomUUID } from 'crypto';
import { spawn } from 'child_process';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 360; // 6 minutes for large file conversions

const UPLOAD_DIR = path.join(tmpdir(), 'form3dai-uploads');
const SUPPORTED_FORMATS = ['stl', 'step', 'stp', 'obj', 'ply'];
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

// Initialize directories
async function ensureUploadDir() {
  try {
    await mkdir(UPLOAD_DIR, { recursive: true });
  } catch (error) {
    console.error('Failed to create upload directory:', error);
  }
}

// Cleanup temp files
async function cleanupFiles(filePaths: string[]) {
  for (const filePath of filePaths) {
    try {
      if (existsSync(filePath)) {
        unlinkSync(filePath);
      }
    } catch (error) {
      console.error(`Failed to cleanup ${filePath}:`, error);
    }
  }
}

// Validate file
function validateFile(filename: string, size: number): string | null {
  const ext = filename.split('.').pop()?.toLowerCase();
  if (!ext || !SUPPORTED_FORMATS.includes(ext)) {
    return `Invalid file format. Supported: ${SUPPORTED_FORMATS.join(', ').toUpperCase()}`;
  }
  if (size > MAX_FILE_SIZE) {
    return `File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB`;
  }
  return null;
}

// Get file info
function getFileInfo(filename: string): { name: string; ext: string } {
  const name = filename.replace(/\.[^/.]+$/, '');
  const ext = filename.split('.').pop()?.toLowerCase() || 'step';
  return { name, ext };
}

// Run FreeCAD for actual file conversion
function runFreeCADConversion(
  inputPath: string,
  outputPath: string,
  inputFormat: string,
  outputFormat: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const pythonScript = buildFreeCADScript(inputPath, outputPath, inputFormat, outputFormat);
    const scriptPath = path.join(tmpdir(), `freecad_${randomUUID()}.py`);
    
    try {
      writeFileSync(scriptPath, pythonScript);
    } catch (err) {
      return reject(new Error(`Failed to write FreeCAD script: ${err}`));
    }

    console.log(`Running FreeCAD conversion: ${inputFormat} -> ${outputFormat}`);
    console.log(`Script: ${scriptPath}`);
    
    // Use python3 with FreeCAD path
    const child = spawn('python3', [scriptPath], {
      env: {
        ...process.env,
        PYTHONPATH: '/usr/lib/freecad-python3/lib',
      },
    });

    let stderr = '';
    let stdout = '';
    let timedOut = false;
    let processExited = false;

    // 6 minute timeout (360 seconds) for large files
    const timeoutHandle = setTimeout(() => {
      if (!processExited) {
        timedOut = true;
        console.error('❌ FreeCAD conversion timeout after 360 seconds');
        child.kill('SIGTERM');
        setTimeout(() => {
          if (!child.killed) {
            child.kill('SIGKILL');
          }
        }, 5000);
      }
    }, 360000);

    if (child.stderr) {
      child.stderr.on('data', (data: Buffer) => {
        const text = data.toString();
        stderr += text;
        console.log('[FreeCAD STDERR]', text);
      });
    }

    if (child.stdout) {
      child.stdout.on('data', (data: Buffer) => {
        const text = data.toString();
        stdout += text;
        console.log('[FreeCAD STDOUT]', text);
      });
    }

    child.on('error', (err) => {
      clearTimeout(timeoutHandle);
      processExited = true;
      try {
        unlinkSync(scriptPath);
      } catch (e) {
        // ignore
      }
      reject(new Error(`FreeCAD spawn error: ${err.message}`));
    });

    child.on('exit', (code) => {
      clearTimeout(timeoutHandle);
      processExited = true;
      
      try {
        unlinkSync(scriptPath);
      } catch (e) {
        // ignore
      }

      if (timedOut) {
        reject(new Error(`FreeCAD conversion timed out after 360 seconds. File may be too large or complex.`));
        return;
      }

      // Check if output file exists first
      if (existsSync(outputPath)) {
        console.log(`✓ FreeCAD conversion successful!`);
        console.log(`Output file: ${outputPath}`);
        resolve('Conversion completed successfully');
      } else if (code === 0) {
        // Code 0 but no file
        reject(new Error(`FreeCAD returned success but no output file was created at ${outputPath}`));
      } else {
        const message = `FreeCAD exited with code ${code}. stderr: ${stderr}, stdout: ${stdout}`;
        reject(new Error(message));
      }
    });
  });
}

// Build FreeCAD Python script for conversion
function buildFreeCADScript(
  inputPath: string,
  outputPath: string,
  inputFormat: string,
  outputFormat: string
): string {
  const inFormat = inputFormat.toLowerCase();
  const outFormat = outputFormat.toLowerCase();

  return `#!/usr/bin/env python3
import sys
import os

print("=" * 70)
print("3D File Format Converter - Using Trimesh")
print("=" * 70)

try:
    import trimesh
    import numpy as np
    print("✓ Trimesh imported successfully")
    print("✓ NumPy imported successfully")
    
    input_file = r"""${inputPath}"""
    output_file = r"""${outputPath}"""
    input_format = """${inFormat}"""
    output_format = """${outFormat}"""
    
    print()
    print("Input File:  " + input_file)
    print("Output File: " + output_file)
    print("Conversion:  " + input_format.upper() + " -> " + output_format.upper())
    print()
    
    # Load the input file
    print("[1/3] Loading " + input_format.upper() + " file...")
    mesh = trimesh.load(input_file, process=False)
    print("      ✓ Loaded successfully")
    print("      Vertices: " + str(len(mesh.vertices)))
    print("      Faces: " + str(len(mesh.faces)))
    if hasattr(mesh, 'bounds'):
        print("      Bounds: " + str(mesh.bounds))
    
    # Process mesh
    print("[2/3] Processing mesh...")
    if not mesh.is_valid:
        print("      ⚠ Mesh has issues, attempting repair...")
        mesh.remove_degenerate_faces()
        mesh.remove_infinite_values()
        print("      ✓ Cleaned up mesh")
    
    print("      ✓ Mesh is valid: " + str(mesh.is_valid))
    
    # Export to output format
    print("[3/3] Exporting to " + output_format.upper() + "...")
    mesh.export(output_file, file_type=output_format)
    print("      ✓ File exported successfully")
    
    # Verify output
    if os.path.exists(output_file):
        file_size = os.path.getsize(output_file)
        print()
        print("=" * 70)
        print("✓ CONVERSION COMPLETED SUCCESSFULLY!")
        print("=" * 70)
        print("Output file size: " + str(file_size) + " bytes")
        sys.exit(0)
    else:
        raise Exception("Output file was not created")

except ImportError as e:
    print("ERROR: Failed to import required library: " + str(e), file=sys.stderr)
    print("Make sure trimesh and numpy are installed", file=sys.stderr)
    sys.exit(1)
    
except Exception as e:
    print()
    print("ERROR: " + str(e), file=sys.stderr)
    import traceback
    traceback.print_exc(file=sys.stderr)
    sys.exit(1)
`;
}

// POST handler
export async function POST(request: NextRequest) {
  let uploadedFile: string | null = null;
  let outputFile: string | null = null;
  const tempFiles: string[] = [];

  try {
    await ensureUploadDir();

    // Parse multipart form data
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const prompt = formData.get('prompt') as string | null;

    if (!file) {
      return NextResponse.json(
        { error: 'File is required' },
        { status: 400 }
      );
    }

    // Validate file
    const validationError = validateFile(file.name, file.size);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Get file info
    const { name, ext } = getFileInfo(file.name);
    console.log(`Processing: ${name}.${ext} | Prompt: "${prompt}"`);

    // Save uploaded file
    const fileId = randomUUID();
    uploadedFile = path.join(UPLOAD_DIR, `${fileId}_${file.name}`);
    tempFiles.push(uploadedFile);

    const buffer = await file.arrayBuffer();
    await writeFile(uploadedFile, Buffer.from(buffer));
    console.log(`Saved to: ${uploadedFile}`);

    // Skip AI analysis - use direct conversion
    console.log('Skipping AI analysis - using direct format conversion');
    
    // Determine output format based on input
    let outputFormat = 'STEP';
    let summary = `Converting ${ext.toUpperCase()} to ${outputFormat}`;
    
    if (ext.toLowerCase() === 'step' || ext.toLowerCase() === 'stp') {
      outputFormat = 'STL'; // Convert STEP to STL
      summary = `Converting STEP to STL for 3D printing`;
    } else if (ext.toLowerCase() === 'stl') {
      outputFormat = 'STEP'; // Convert STL to STEP (most common)
      summary = `Converting STL mesh to STEP solid for CAD`;
    }
    
    console.log(`Output Format: ${outputFormat}`);

    // Convert file using FreeCAD
    const outputFilename = `${name}_processed.${outputFormat.toLowerCase()}`;
    outputFile = path.join(UPLOAD_DIR, outputFilename);
    tempFiles.push(outputFile);

    console.log(`Starting 3D file conversion...`);
    
    // Run trimesh conversion via Python script
    // (no need to check for freecadcmd - using lightweight trimesh instead)
    await runFreeCADConversion(uploadedFile, outputFile, ext, outputFormat);
    console.log('✓ Trimesh conversion successful');

    // Read processed file
    const processedBuffer = await readFile(outputFile);
    console.log(`Output file size: ${(processedBuffer.length / 1024).toFixed(2)} KB`);

    // Schedule cleanup
    setTimeout(() => {
      cleanupFiles(tempFiles);
      console.log('Temp files cleaned up');
    }, 60000); // 60 seconds

    return new NextResponse(processedBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${outputFilename}"`,
        'Content-Length': processedBuffer.length.toString(),
        'X-Processing-Summary': summary,
      },
    });
  } catch (error) {
    console.error('3D File Processing Error:', error);
    
    // Cleanup on error
    await cleanupFiles(tempFiles);

    const errorMessage = error instanceof Error ? error.message : 'Failed to process 3D file';

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
