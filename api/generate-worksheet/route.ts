import { NextResponse } from 'next/server'
import { buildWorksheet, type LanguageCode } from '@/lib/demo-data'

// POST /api/generate-worksheet — swap in a real generation model here.
export async function POST(request: Request) {
  const { count, target, types } = (await request.json().catch(() => ({}))) as {
    count?: number
    target?: LanguageCode
    types?: string[]
  }
  const questions = buildWorksheet(count ?? 5, target ?? 'santhali').filter(
    (q) => !types || types.length === 0 || types.includes(q.type),
  )
  return NextResponse.json({ questions, isDemo: true })
}
