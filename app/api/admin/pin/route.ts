import { NextRequest, NextResponse } from 'next/server'
import { verifyPin, markPinVerified } from '@/lib/adminAuth'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const pin = typeof body?.pin === 'string' ? body.pin.trim() : ''

  if (!verifyPin(pin)) {
    return NextResponse.json({ error: 'Incorrect PIN.' }, { status: 401 })
  }

  await markPinVerified()
  return NextResponse.json({ ok: true })
}
