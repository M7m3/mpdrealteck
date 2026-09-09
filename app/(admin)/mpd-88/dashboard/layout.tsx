import React from 'react'
import { redirect } from 'next/navigation'
import DesktopOnlyGate from '@/components/admin/DesktopOnlyGate'
import AdminNav from '@/components/admin/AdminNav'
import { isAdminAuthenticated } from '@/lib/adminAuth'

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAdminAuthenticated())) {
    redirect('/mpd-88')
  }

  return (
    <DesktopOnlyGate>
      <div className="min-h-screen bg-slate-950">
        <AdminNav />
        <main className="mx-auto max-w-7xl px-8 py-10">{children}</main>
      </div>
    </DesktopOnlyGate>
  )
}
