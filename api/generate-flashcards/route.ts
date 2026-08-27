import { NextResponse } from 'next/server'
import { DEMO_FLASHCARDS, type LanguageCode } from '@/lib/demo-data'

// POST /api/generate-flashcards — swap in a real generation model here.
export async function POST(request: Request) {
  const { target } = (await request.json().catch(() => ({}))) as { target?: LanguageCode }
  const t = target ?? 'santhali'
  const cards = DEMO_FLASHCARDS.map((c) => ({
    emoji: c.emoji,
    hindi: c.hindi,
    target: c.translations[t],
    pronunciation: c.pronunciation,
  }))
  return NextResponse.json({ cards, isDemo: true })
}
