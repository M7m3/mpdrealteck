"use client"

import React from 'react'
import { useShortlist, type PropertySource } from '@/contexts/ShortlistContext'

interface ShortlistButtonProps {
  propertyId: string
  propertySource: PropertySource
  className?: string
}

export default function ShortlistButton({ propertyId, propertySource, className = '' }: ShortlistButtonProps) {
  const { isShortlisted, toggle, authReady } = useShortlist()
  const active = isShortlisted(propertyId, propertySource)

  return (
    <button
      type="button"
      disabled={!authReady}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggle(propertyId, propertySource)
      }}
      aria-label={active ? 'Remove from shortlist' : 'Add to shortlist'}
      aria-pressed={active}
      className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md shadow-md transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:hover:scale-100 ${
        active ? 'bg-white text-red-500' : 'bg-white/90 text-slate-500 hover:text-red-500'
      } ${className}`}
    >
      <svg className="h-4.5 w-4.5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.716-4.35-9.428-8.03C.6 10.1 1.02 6.6 3.6 4.9c2.2-1.45 5-.95 6.4 1.1L12 8l2-2c1.4-2.05 4.2-2.55 6.4-1.1 2.58 1.7 3 5.2 1.03 8.07C18.716 16.65 12 21 12 21Z" />
      </svg>
    </button>
  )
}
