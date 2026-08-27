import { NextResponse } from 'next/server'
import { DEMO_VOICE, type LanguageCode } from '@/lib/demo-data'

// POST /api/voice-translate — swap in real ASR + NMT + TTS here.
export async function POST(request: Request) {
  const { target } = (await request.json().catch(() => ({}))) as { target?: LanguageCode }
  const t = target ?? 'santhali'
  return NextResponse.json({
    spoken: DEMO_VOICE.spoken,
    translated: DEMO_VOICE.translated[t],
    responseTime: 1.8,
    isDemo: true,
  })
}
