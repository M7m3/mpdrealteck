import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

const VALID_SOURCES = new Set(['buy', 'corporate-leasing'])

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const propertyId = searchParams.get('propertyId') || ''
  const propertySource = searchParams.get('propertySource') || ''

  if (!propertyId || !VALID_SOURCES.has(propertySource)) {
    return NextResponse.json({ error: 'Invalid property reference.' }, { status: 400 })
  }

  const [reviews, currentUser] = await Promise.all([
    prisma.review.findMany({
      where: { propertyId, propertySource },
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { id: true, name: true, email: true } } },
    }),
    getCurrentUser(),
  ])

  const average = reviews.length
    ? Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10
    : 0

  const mine = currentUser ? reviews.find((r) => r.userId === currentUser.id) : undefined

  return NextResponse.json({
    average,
    count: reviews.length,
    myReview: mine ? { rating: mine.rating, comment: mine.comment } : null,
    reviews: reviews.map((r) => ({
      id: r.id,
      rating: r.rating,
      comment: r.comment,
      createdAt: r.createdAt,
      isMine: currentUser ? r.userId === currentUser.id : false,
      reviewerName: r.user.name || r.user.email.split('@')[0],
    })),
  })
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'Sign in to write a review.' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const propertyId = typeof body?.propertyId === 'string' ? body.propertyId : ''
  const propertySource = typeof body?.propertySource === 'string' ? body.propertySource : ''
  const rating = Number(body?.rating)
  const comment = typeof body?.comment === 'string' ? body.comment.trim() : ''

  if (!propertyId || !VALID_SOURCES.has(propertySource)) {
    return NextResponse.json({ error: 'Invalid property reference.' }, { status: 400 })
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Rating must be between 1 and 5.' }, { status: 400 })
  }
  if (!comment || comment.length > 2000) {
    return NextResponse.json({ error: 'Enter a review up to 2000 characters.' }, { status: 400 })
  }

  await prisma.review.upsert({
    where: { userId_propertyId_propertySource: { userId: user.id, propertyId, propertySource } },
    update: { rating, comment },
    create: { userId: user.id, propertyId, propertySource, rating, comment },
  })

  return NextResponse.json({ ok: true })
}

export async function DELETE(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'Sign in to manage your review.' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const propertyId = typeof body?.propertyId === 'string' ? body.propertyId : ''
  const propertySource = typeof body?.propertySource === 'string' ? body.propertySource : ''

  if (!propertyId || !VALID_SOURCES.has(propertySource)) {
    return NextResponse.json({ error: 'Invalid property reference.' }, { status: 400 })
  }

  await prisma.review.deleteMany({ where: { userId: user.id, propertyId, propertySource } })

  return NextResponse.json({ ok: true })
}
