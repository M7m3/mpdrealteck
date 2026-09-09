import { NextRequest, NextResponse } from 'next/server'
import { hasPinAccess, verifyAdminCredentials, createAdminSession } from '@/lib/adminAuth'

export async function POST(request: NextRequest) {
  if (!(await hasPinAccess())) {
    return NextResponse.json({ error: 'PIN verification required.' }, { status: 403 })
  }

  const body = await request.json().catch(() => null)
  const username = typeof body?.username === 'string' ? body.username : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!verifyAdminCredentials(username, password)) {
    return NextResponse.json({ error: 'Incorrect username or password.' }, { status: 401 })
  }

  await createAdminSession()
  return NextResponse.json({ ok: true })
}
