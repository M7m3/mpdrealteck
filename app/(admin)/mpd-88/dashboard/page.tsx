import React from 'react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function AdminOverviewPage() {
  const [propertyCount, reviewCount, shortlistCount, blogCount, subscriberCount] = await Promise.all([
    prisma.property.count(),
    prisma.review.count(),
    prisma.shortlist.count(),
    prisma.blogPost.count(),
    prisma.notificationSubscriber.count({ where: { active: true } }),
  ])

  const cards = [
    { label: 'Properties', value: propertyCount, href: '/mpd-88/dashboard/properties' },
    { label: 'Customer Reviews', value: reviewCount, href: '/mpd-88/dashboard/reviews' },
    { label: 'Wishlisted Items', value: shortlistCount, href: '/mpd-88/dashboard/wishlist' },
    { label: 'Blog Posts', value: blogCount, href: '/mpd-88/dashboard/blog' },
    { label: 'Notification Subscribers', value: subscriberCount, href: '/mpd-88/dashboard/blog' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white">Overview</h1>
      <p className="mt-1 text-sm text-slate-400">A quick snapshot of everything on the site.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-150 hover:border-blue-500/40"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{card.label}</span>
            <span className="mt-2 block text-3xl font-extrabold text-white">{card.value}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
