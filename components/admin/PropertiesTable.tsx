"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface PropertyRow {
  id: string
  source: string
  slug: string
  name: string
  city: string | null
  priceRange: string | null
  status: string | null
}

export default function PropertiesTable({ properties }: { properties: PropertyRow[] }) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/admin/properties/${id}`, { method: 'DELETE' })
      if (res.ok) router.refresh()
    } finally {
      setDeletingId(null)
    }
  }

  if (properties.length === 0) {
    return <p className="mt-8 text-sm text-slate-500">No properties yet. Add your first one to get started.</p>
  }

  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">City</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {properties.map((p) => (
            <tr key={p.id} className="text-slate-300 hover:bg-slate-900/60">
              <td className="px-4 py-3 font-semibold text-white">{p.name}</td>
              <td className="px-4 py-3 text-xs">{p.source === 'buy' ? 'Buy' : 'Corporate Leasing'}</td>
              <td className="px-4 py-3 text-xs">{p.city || '—'}</td>
              <td className="px-4 py-3 text-xs">{p.priceRange || '—'}</td>
              <td className="px-4 py-3 text-xs">{p.status || '—'}</td>
              <td className="px-4 py-3 text-right">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/mpd-88/dashboard/properties/${p.id}`}
                    className="rounded-md border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-800"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(p.id, p.name)}
                    disabled={deletingId === p.id}
                    className="rounded-md border border-red-500/30 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/10 disabled:opacity-50"
                  >
                    {deletingId === p.id ? 'Deleting…' : 'Delete'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
