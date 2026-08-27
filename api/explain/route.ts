import { NextResponse } from 'next/server'
import { DEMO_SIMPLIFIED } from '@/lib/demo-data'

// POST /api/explain — swap in a real lesson-simplification model here.
export async function POST(request: Request) {
  const { grade } = (await request.json().catch(() => ({}))) as { grade?: 1 | 2 | 3 }
  const g = (grade ?? 1) as 1 | 2 | 3
  return NextResponse.json({ grade: g, text: DEMO_SIMPLIFIED[g], isDemo: true })
}
