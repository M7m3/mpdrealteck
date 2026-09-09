"use client"

import React, { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

interface Post {
  slug: string
  title: string
  excerpt: string | null
  images: string[]
  publishedAt: string
}

function UnsubscribeNotice() {
  const searchParams = useSearchParams()
  if (searchParams.get('unsubscribed') !== '1') return null
  return (
    <div className="mb-8 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">
      You&apos;ve been unsubscribed from market trend notifications.
    </div>
  )
}

export default function MarketTrends() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [subscribing, setSubscribing] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/blog?limit=6')
      .then((r) => r.json())
      .then((data) => setPosts(data.posts || []))
      .finally(() => setLoading(false))
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubscribing(true)
    try {
      const res = await fetch('/api/notify-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Could not enable notifications.')
        return
      }
      setSubscribed(true)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubscribing(false)
    }
  }

  return (
    <section className="relative bg-white py-24 lg:py-32" id="market-trends">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={null}>
          <UnsubscribeNotice />
        </Suspense>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between border-b border-slate-200 pb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Market Trends</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everyday Real Estate Market Insights
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Fresh market commentary, pricing movements, and investment insight — published as it happens.
            </p>
          </div>

          <div className="w-full max-w-sm shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-5">
            {subscribed ? (
              <p className="text-sm font-semibold text-emerald-600">
                You&apos;re subscribed — we&apos;ll email you when a new update goes live.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500">
                  Get notified of new updates
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={subscribing}
                    className="shrink-0 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 disabled:opacity-60"
                  >
                    {subscribing ? '…' : 'Enable Notifications'}
                  </button>
                </div>
                {error && <p className="text-xs font-medium text-red-600">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {loading ? (
          <p className="py-16 text-center text-sm text-slate-500">Loading updates…</p>
        ) : posts.length === 0 ? (
          <p className="py-16 text-center text-sm text-slate-500">No market updates published yet — check back soon.</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/invest/insights/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {post.images[0] && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.images[0]}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold text-slate-400">
                    {new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">{post.excerpt}</p>
                  )}
                  <span className="mt-4 text-sm font-semibold text-blue-600">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
