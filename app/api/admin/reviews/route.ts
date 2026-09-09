import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: { select: { email: true, name: true } } },
  })

  const propertyIds = reviews.map((r) => r.propertyId)
  const properties = await prisma.property.findMany({
    where: { slug: { in: propertyIds } },
    select: { slug: true, name: true, source: true },
  })
  const propertyMap = new Map(properties.map((p) => [`${p.source}:${p.slug}`, p.name]))

  return NextResponse.json({
    reviews: reviews.map((r) => ({
      id: r.id,
      rating: r.rating,
      comment: r.comment,
      createdAt: r.createdAt,
      reviewerName: r.user.name || r.user.email,
      reviewerEmail: r.user.email,
      propertyName: propertyMap.get(`${r.propertySource}:${r.propertyId}`) || r.propertyId,
      propertySource: r.propertySource,
    })),
  })
}
