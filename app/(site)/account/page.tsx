import React from 'react'
import AccountSettings from '@/components/sections/account/AccountSettings'

export const metadata = {
  title: 'Account Settings | MPD Realteck',
  description: 'Manage your profile, view your shortlisted properties, and contact our advisory desk.',
}

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-24 md:pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Account Settings</h1>
        <p className="mt-2 text-sm text-slate-600">Manage your profile and preferences.</p>
      </div>
      <AccountSettings />
    </main>
  )
}
