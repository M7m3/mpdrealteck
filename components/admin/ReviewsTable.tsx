"use client"

import React, { useState } from 'react'

interface ReviewRow {
  id: string
  rating: number
  comment: string
  createdAt: string
  reviewerName: string
  reviewerEmail: string
  propertyName: string
  propertySource: string
}

export default function ReviewsTable({ reviews: initial }: { reviews: ReviewRow[] }) {
  const [reviews, setReviews] = useState(initial)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this review? This cannot be undone.')) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, { method: 'DELETE' })
      if (res.ok) setReviews((prev) => prev.filter((r) => r.id !== id))
    } finally {
      setDeletingId(null)
    }
  }

  if (reviews.length === 0) {
    return <p className="mt-8 text-sm text-slate-500">No reviews yet.</p>
  }

  return (
    <div className="mt-6 space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n}>{n <= r.rating ? '★' : '☆'}</span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-300">{r.comment}</p>
              <p className="mt-3 text-xs text-slate-500">
                <span className="font-semibold text-slate-300">{r.reviewerName}</span> ({r.reviewerEmail}) on{' '}
                <span className="font-semibold text-slate-300">{r.propertyName}</span>
                {' · '}
                {new Date(r.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => handleDelete(r.id)}
              disabled={deletingId === r.id}
              className="shrink-0 rounded-md border border-red-500/30 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/10 disabled:opacity-50"
            >
              {deletingId === r.id ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
