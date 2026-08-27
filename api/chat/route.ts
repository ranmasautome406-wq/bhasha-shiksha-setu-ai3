import { NextResponse } from 'next/server'
import { tutorReply } from '@/lib/demo-data'

// POST /api/chat — swap in a real LLM tutor here (server-side key only).
export async function POST(request: Request) {
  const { message } = (await request.json().catch(() => ({}))) as { message?: string }
  return NextResponse.json({ reply: tutorReply(message ?? ''), isDemo: true })
}
