import React from 'react'
import ShortlistGrid from '@/components/sections/shortlist/ShortlistGrid'

export const metadata = {
  title: 'Your Shortlist | MPD Realteck',
  description: 'Review the flats, homes, and commercial spaces you have shown interest in.',
}

export default function ShortlistPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Your Shortlist</h1>
        <p className="mt-2 text-sm text-slate-600">Properties and corporate leasing spaces you&apos;ve shown interest in.</p>
      </div>
      <ShortlistGrid />
    </main>
  )
}
