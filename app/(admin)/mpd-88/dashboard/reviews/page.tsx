import React from 'react'
import { prisma } from '@/lib/prisma'
import ReviewsTable from '@/components/admin/ReviewsTable'

export default async function AdminReviewsPage() {
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

  const rows = reviews.map((r) => ({
    id: r.id,
    rating: r.rating,
    comment: r.comment,
    createdAt: r.createdAt.toISOString(),
    reviewerName: r.user.name || r.user.email,
    reviewerEmail: r.user.email,
    propertyName: propertyMap.get(`${r.propertySource}:${r.propertyId}`) || r.propertyId,
    propertySource: r.propertySource,
  }))

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white">Customer Reviews</h1>
      <p className="mt-1 text-sm text-slate-400">View and moderate reviews left across all properties.</p>
      <ReviewsTable reviews={rows} />
    </div>
  )
}
