"use client"

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export type PropertySource = 'buy' | 'corporate-leasing'

interface ShortlistItem {
  propertyId: string
  propertySource: PropertySource
}

interface ShortlistContextValue {
  items: ShortlistItem[]
  loading: boolean
  authReady: boolean
  isShortlisted: (propertyId: string, propertySource: PropertySource) => boolean
  toggle: (propertyId: string, propertySource: PropertySource) => Promise<void>
}

const ShortlistContext = createContext<ShortlistContextValue | undefined>(undefined)

export function ShortlistProvider({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading } = useAuth()
  const [items, setItems] = useState<ShortlistItem[]>([])
  const [loading, setLoading] = useState(false)

  const refresh = useCallback(async () => {
    if (!user) {
      setItems([])
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/shortlist', { cache: 'no-store' })
      const data = await res.json()
      setItems(data.shortlist || [])
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    // Re-fetch whenever the signed-in user changes (login, logout, switch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh()
  }, [refresh])

  const isShortlisted = useCallback(
    (propertyId: string, propertySource: PropertySource) =>
      items.some((i) => i.propertyId === propertyId && i.propertySource === propertySource),
    [items]
  )

  const toggle = useCallback(
    async (propertyId: string, propertySource: PropertySource) => {
      // Auth state hasn't resolved yet — avoid a false "not logged in" redirect.
      if (authLoading) return

      if (!user) {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
        return
      }

      const currentlyShortlisted = isShortlisted(propertyId, propertySource)

      // Optimistic update
      setItems((prev) =>
        currentlyShortlisted
          ? prev.filter((i) => !(i.propertyId === propertyId && i.propertySource === propertySource))
          : [...prev, { propertyId, propertySource }]
      )

      const res = await fetch('/api/shortlist', {
        method: currentlyShortlisted ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ propertyId, propertySource }),
      })

      if (!res.ok) {
        // revert on failure
        await refresh()
      }
    },
    [user, authLoading, isShortlisted, refresh]
  )

  return (
    <ShortlistContext.Provider value={{ items, loading, authReady: !authLoading, isShortlisted, toggle }}>
      {children}
    </ShortlistContext.Provider>
  )
}

export function useShortlist() {
  const ctx = useContext(ShortlistContext)
  if (!ctx) throw new Error('useShortlist must be used within ShortlistProvider')
  return ctx
}
