import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Create a system prompt for 3D printing consultancy
    const systemPrompt = `You are an expert AI consultant for 3D printing technology and materials. 
    You help users make informed decisions about:
    - Material selection based on project requirements
    - Technology choices (SLA, FDM, SLS, etc.)
    - Cost optimization and project management
    - Technical specifications and recommendations

    Provide concise, actionable advice. Focus on practical recommendations with specific details.
    Consider factors like: budget, production volume, required strength, surface finish, and timeline.

    Current context: ${context || 'General 3D printing consultation'}`;

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Cost-effective model for real-time responses
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Create a readable stream for the response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              // Send the content as SSE (Server-Sent Events)
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('AI Analyzer API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process AI analysis request' },
      { status: 500 }
    );
  }
}