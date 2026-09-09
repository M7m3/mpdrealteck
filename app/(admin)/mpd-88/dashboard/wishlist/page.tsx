import React from 'react'
import { prisma } from '@/lib/prisma'

export default async function AdminWishlistPage() {
  const items = await prisma.shortlist.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: { select: { email: true, name: true } } },
  })

  const propertyKeys = items.map((i) => i.propertyId)
  const properties = await prisma.property.findMany({
    where: { slug: { in: propertyKeys } },
    select: { slug: true, name: true, source: true },
  })
  const propertyMap = new Map(properties.map((p) => [`${p.source}:${p.slug}`, p.name]))

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white">Wishlist Activity</h1>
      <p className="mt-1 text-sm text-slate-400">See what customers have shortlisted, most recent first.</p>

      {items.length === 0 ? (
        <p className="mt-8 text-sm text-slate-500">Nobody has shortlisted anything yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Saved On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {items.map((item) => (
                <tr key={item.id} className="text-slate-300 hover:bg-slate-900/60">
                  <td className="px-4 py-3">
                    <span className="font-semibold text-white">{item.user.name || 'Unnamed'}</span>
                    <span className="block text-xs text-slate-500">{item.user.email}</span>
                  </td>
                  <td className="px-4 py-3 text-xs">
                    {propertyMap.get(`${item.propertySource}:${item.propertyId}`) || item.propertyId}
                  </td>
                  <td className="px-4 py-3 text-xs">{item.propertySource === 'buy' ? 'Buy' : 'Corporate Leasing'}</td>
                  <td className="px-4 py-3 text-xs">{item.createdAt.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
