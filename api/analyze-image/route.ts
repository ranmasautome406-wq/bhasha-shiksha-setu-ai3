import { NextResponse } from 'next/server'
import { DEMO_OCR } from '@/lib/demo-data'

// POST /api/analyze-image
// Replace the demo body with a real OCR + lesson-understanding model call.
// Credentials must be read from server-side env vars only.
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  console.log('[v0] /api/analyze-image received:', body?.name)
  return NextResponse.json({ ...DEMO_OCR, isDemo: true })
}
