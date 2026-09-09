"use client"

import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import type { PropertySource } from '@/contexts/ShortlistContext'

interface ReviewItem {
  id: string
  rating: number
  comment: string
  createdAt: string
  isMine: boolean
  reviewerName: string
}

interface ReviewsData {
  average: number
  count: number
  myReview: { rating: number; comment: string } | null
  reviews: ReviewItem[]
}

function Star({ filled, className = 'h-4 w-4' }: { filled: boolean; className?: string }) {
  return (
    <svg className={className} fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385c.117.487-.417.877-.845.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54c-.428.267-.962-.123-.845-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  )
}

function StarRow({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 text-amber-400 ${className || ''}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} filled={n <= Math.round(rating)} />
      ))}
    </div>
  )
}

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          className="text-amber-400 transition-transform hover:scale-110"
        >
          <Star filled={n <= (hover || value)} className="h-7 w-7" />
        </button>
      ))}
    </div>
  )
}

export default function PropertyReviews({ propertyId, propertySource }: { propertyId: string; propertySource: PropertySource }) {
  const { user, loading: authLoading } = useAuth()
  const [data, setData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/reviews?propertyId=${encodeURIComponent(propertyId)}&propertySource=${propertySource}`, {
        cache: 'no-store',
      })
      const json = await res.json()
      setData(json)
      if (json.myReview) {
        setRating(json.myReview.rating)
        setComment(json.myReview.comment)
      }
    } finally {
      setLoading(false)
    }
  }, [propertyId, propertySource])

  useEffect(() => {
    // One-time fetch of reviews for this property on mount / when it changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load()
  }, [load])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating < 1) {
      setError('Select a star rating.')
      return
    }
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ propertyId, propertySource, rating, comment }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Could not submit your review.')
        return
      }
      setSubmitted(true)
      await load()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-lg font-bold tracking-tight text-slate-900">Customer Reviews</h3>
        {!loading && data && data.count > 0 && (
          <div className="flex items-center gap-2">
            <StarRow rating={data.average} />
            <span className="text-sm font-bold text-slate-900">{data.average.toFixed(1)}</span>
            <span className="text-xs text-slate-500">({data.count} review{data.count === 1 ? '' : 's'})</span>
          </div>
        )}
      </div>

      {loading ? (
        <p className="mt-4 text-sm text-slate-500">Loading reviews…</p>
      ) : (
        <>
          {data && data.reviews.length > 0 ? (
            <ul className="mt-5 space-y-4 divide-y divide-slate-100">
              {data.reviews.map((r) => (
                <li key={r.id} className="pt-4 first:pt-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-slate-900">
                      {r.reviewerName}{r.isMine ? ' (You)' : ''}
                    </span>
                    <span className="text-xs text-slate-400">{new Date(r.createdAt).toLocaleDateString()}</span>
                  </div>
                  <StarRow rating={r.rating} className="mt-1" />
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-slate-500">No reviews yet — be the first to share your experience.</p>
          )}

          <div className="mt-6 border-t border-slate-100 pt-6">
            {authLoading ? null : !user ? (
              <p className="text-sm text-slate-600">
                <Link href={`/login?redirect=${encodeURIComponent(typeof window !== 'undefined' ? window.location.pathname : '/')}`} className="font-semibold text-blue-600 hover:underline">
                  Log in
                </Link>{' '}
                to write a review.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500 font-mono">
                  {data?.myReview ? 'Edit Your Review' : 'Write a Review'}
                </p>
                <StarPicker value={rating} onChange={setRating} />
                <textarea
                  rows={3}
                  required
                  maxLength={2000}
                  placeholder="Share your experience with this property…"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm leading-relaxed text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                {error && <p className="text-xs font-medium text-red-600">{error}</p>}
                {submitted && !error && <p className="text-xs font-medium text-emerald-600">Thanks for your review.</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 disabled:opacity-60"
                >
                  {submitting ? 'Submitting…' : data?.myReview ? 'Update Review' : 'Submit Review'}
                </button>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  )
}
