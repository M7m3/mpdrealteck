"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import ImageUploader from '@/components/admin/ImageUploader'

interface PropertyFormProps {
  property?: {
    id: string
    source: string
    slug: string
    name: string
    developer: string | null
    image: string
    city: string | null
    state: string | null
    status: string | null
    priceRange: string | null
    description: string | null
    reraCertified: boolean
    reraNumber: string | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    details: any
  }
}

export default function PropertyForm({ property }: PropertyFormProps) {
  const router = useRouter()
  const isEdit = !!property

  const [source, setSource] = useState(property?.source || 'buy')
  const [slug, setSlug] = useState(property?.slug || '')
  const [name, setName] = useState(property?.name || '')
  const [developer, setDeveloper] = useState(property?.developer || '')
  const [image, setImage] = useState(property?.image || '')
  const [city, setCity] = useState(property?.city || '')
  const [state, setState] = useState(property?.state || '')
  const [status, setStatus] = useState(property?.status || '')
  const [priceRange, setPriceRange] = useState(property?.priceRange || '')
  const [description, setDescription] = useState(property?.description || '')
  const [reraCertified, setReraCertified] = useState(property?.reraCertified || false)
  const [reraNumber, setReraNumber] = useState(property?.reraNumber || '')
  const [detailsJson, setDetailsJson] = useState(
    property?.details ? JSON.stringify(property.details, null, 2) : '{}'
  )

  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const payload = {
      source,
      slug: slug.trim().toLowerCase(),
      name,
      developer,
      image,
      city,
      state,
      status,
      priceRange,
      description,
      reraCertified,
      reraNumber,
      details: detailsJson,
    }

    try {
      const res = await fetch(isEdit ? `/api/admin/properties/${property!.id}` : '/api/admin/properties', {
        method: isEdit ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong.')
        return
      }
      router.push('/mpd-88/dashboard/properties')
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
  const labelClass = 'mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500'

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">{error}</div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Listing Type</label>
          <select
            disabled={isEdit}
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className={`${inputClass} disabled:opacity-50`}
          >
            <option value="buy">Buy Property</option>
            <option value="corporate-leasing">Corporate Leasing</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Slug (used in URL, e.g. &quot;one-fng&quot;)</label>
          <input
            required
            disabled={isEdit}
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className={`${inputClass} disabled:opacity-50`}
            placeholder="my-new-property"
          />
        </div>
      </div>

      <ImageUploader value={image} onChange={setImage} folder="properties" label="Property Image" />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Property Name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Developer</label>
          <input value={developer} onChange={(e) => setDeveloper(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>City</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>State</label>
          <input value={state} onChange={(e) => setState(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Status</label>
          <input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={inputClass}
            placeholder="Under Construction / Ready to Move"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className={inputClass}
            placeholder="₹86.0 Lac - ₹1.33 Cr"
          />
        </div>
        <div>
          <label className={labelClass}>RERA Number</label>
          <input value={reraNumber} onChange={(e) => setReraNumber(e.target.value)} className={inputClass} />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-300">
        <input
          type="checkbox"
          checked={reraCertified}
          onChange={(e) => setReraCertified(e.target.checked)}
          className="h-4 w-4 rounded border-slate-700 bg-slate-800"
        />
        RERA Certified
      </label>

      <div>
        <label className={labelClass}>Description</label>
        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Advanced Details (JSON — amenities, unit types, proximity metrics, highlights, etc.)
        </label>
        <textarea
          rows={12}
          value={detailsJson}
          onChange={(e) => setDetailsJson(e.target.value)}
          className={`${inputClass} font-mono text-xs`}
          spellCheck={false}
        />
        <p className="mt-1.5 text-[11px] text-slate-500">
          Must be valid JSON. Anything not covered by the fields above (amenities list, unit types, proximity
          metrics, signature USPs, floor areas, highlights) goes here.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Property'}
        </button>
      </div>
    </form>
  )
}
