import React from 'react'
import { redirect } from 'next/navigation'
import DesktopOnlyGate from '@/components/admin/DesktopOnlyGate'
import AdminGate from '@/components/admin/AdminGate'
import { isAdminAuthenticated, hasPinAccess } from '@/lib/adminAuth'

export default async function AdminEntryPage() {
  if (await isAdminAuthenticated()) {
    redirect('/mpd-88/dashboard')
  }

  const pinVerified = await hasPinAccess()

  return (
    <DesktopOnlyGate>
      <AdminGate pinVerified={pinVerified} />
    </DesktopOnlyGate>
  )
}
