import { NextResponse } from 'next/server'
import { DEMO_TRANSLATIONS, type LanguageCode } from '@/lib/demo-data'

// POST /api/translate  — swap in a real NMT model here.
export async function POST(request: Request) {
  const { text, target } = (await request.json().catch(() => ({}))) as {
    text?: string
    target?: LanguageCode
  }
  const translated = DEMO_TRANSLATIONS[target ?? 'santhali'] ?? ''
  return NextResponse.json({ original: text ?? '', translated, isDemo: true })
}
