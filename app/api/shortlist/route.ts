import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

const VALID_SOURCES = new Set(['buy', 'corporate-leasing'])

export async function GET() {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ shortlist: [] })

  const items = await prisma.shortlist.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({
    shortlist: items.map((i) => ({ propertyId: i.propertyId, propertySource: i.propertySource })),
  })
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'Sign in to shortlist properties.' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const propertyId = typeof body?.propertyId === 'string' ? body.propertyId : ''
  const propertySource = typeof body?.propertySource === 'string' ? body.propertySource : ''

  if (!propertyId || !VALID_SOURCES.has(propertySource)) {
    return NextResponse.json({ error: 'Invalid property reference.' }, { status: 400 })
  }

  await prisma.shortlist.upsert({
    where: { userId_propertyId_propertySource: { userId: user.id, propertyId, propertySource } },
    update: {},
    create: { userId: user.id, propertyId, propertySource },
  })

  return NextResponse.json({ ok: true })
}

export async function DELETE(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'Sign in to manage your shortlist.' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const propertyId = typeof body?.propertyId === 'string' ? body.propertyId : ''
  const propertySource = typeof body?.propertySource === 'string' ? body.propertySource : ''

  if (!propertyId || !VALID_SOURCES.has(propertySource)) {
    return NextResponse.json({ error: 'Invalid property reference.' }, { status: 400 })
  }

  await prisma.shortlist.deleteMany({
    where: { userId: user.id, propertyId, propertySource },
  })

  return NextResponse.json({ ok: true })
}
