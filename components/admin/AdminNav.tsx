"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const LINKS = [
  { label: 'Overview', href: '/mpd-88/dashboard' },
  { label: 'Properties', href: '/mpd-88/dashboard/properties' },
  { label: 'Reviews', href: '/mpd-88/dashboard/reviews' },
  { label: 'Wishlist', href: '/mpd-88/dashboard/wishlist' },
  { label: 'Market Trends Blog', href: '/mpd-88/dashboard/blog' },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/mpd-88')
  }

  return (
    <nav className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <div className="flex items-center gap-8">
        <span className="text-sm font-extrabold uppercase tracking-widest text-white">
          MPD <span className="text-blue-400">Admin</span>
        </span>
        <div className="flex items-center gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
                  active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
      <button
        onClick={logout}
        className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors duration-150 hover:bg-slate-800"
      >
        Sign Out
      </button>
    </nav>
  )
}
