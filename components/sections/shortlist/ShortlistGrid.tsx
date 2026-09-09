"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { useShortlist } from '@/contexts/ShortlistContext'
import { PROPERTIES_DB } from '@/data/db'
import { CORPORATE_LEASING_DB } from '@/data/corporateLeasing'

export default function ShortlistGrid() {
  const { user, loading } = useAuth()
  const { items, loading: shortlistLoading, toggle } = useShortlist()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login?redirect=/shortlist')
    }
  }, [loading, user, router])

  if (loading || !user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-sm text-slate-500">Loading your shortlist…</p>
      </div>
    )
  }

  const resolved = items
    .map((item) => {
      if (item.propertySource === 'buy') {
        const asset = PROPERTIES_DB.find((p) => p.id === item.propertyId)
        if (!asset) return null
        return {
          key: `buy-${asset.id}`,
          name: asset.name,
          image: asset.image,
          location: asset.location?.city || 'Regional',
          price: asset.pricingAndInventory?.priceRange || 'Price on Request',
          href: `/buy/${asset.id}`,
          badge: 'Buy',
          propertyId: item.propertyId,
          propertySource: item.propertySource,
        }
      }
      const asset = CORPORATE_LEASING_DB.find((p) => p.id === item.propertyId)
      if (!asset) return null
      return {
        key: `leasing-${asset.id}`,
        name: asset.name,
        image: asset.image,
        location: asset.location,
        price: asset.priceRange,
        href: asset.detailHref || '/corporate-leasing',
        badge: 'Corporate Leasing',
        propertyId: item.propertyId,
        propertySource: item.propertySource,
      }
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {shortlistLoading ? (
        <p className="py-16 text-center text-sm text-slate-500">Loading your saved properties…</p>
      ) : resolved.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-20 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">No properties shortlisted yet</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
            Browse our inventory and tap the bookmark icon on any listing to save it here.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/buy">
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700">
                Browse Properties
              </button>
            </Link>
            <Link href="/corporate-leasing">
              <button className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50">
                Browse Corporate Leasing
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resolved.map((asset) => (
            <div
              key={asset.key}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <Image
                  src={asset.image}
                  alt={`${asset.name} imagery`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded bg-slate-900/90 border border-white/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                  {asset.badge}
                </span>
                <button
                  onClick={() => toggle(asset.propertyId, asset.propertySource as 'buy' | 'corporate-leasing')}
                  aria-label="Remove from shortlist"
                  className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-500 shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105"
                >
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21s-6.716-4.35-9.428-8.03C.6 10.1 1.02 6.6 3.6 4.9c2.2-1.45 5-.95 6.4 1.1L12 8l2-2c1.4-2.05 4.2-2.55 6.4-1.1 2.58 1.7 3 5.2 1.03 8.07C18.716 16.65 12 21 12 21Z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>{asset.location}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-900 line-clamp-1">{asset.name}</h3>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-slate-400">Price</span>
                    <span className="text-sm font-extrabold tracking-tight text-slate-900">{asset.price}</span>
                  </div>
                  <Link href={asset.href}>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
