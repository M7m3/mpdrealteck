"use client"

import React from 'react'
import { AuthProvider } from '@/contexts/AuthContext'
import { ShortlistProvider } from '@/contexts/ShortlistContext'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ShortlistProvider>{children}</ShortlistProvider>
    </AuthProvider>
  )
}
