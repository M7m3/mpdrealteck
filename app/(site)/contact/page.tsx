import React from 'react'
import ContactInterfaceSection from '@/components/sections/contact/ContactInterface'

export const metadata = {
  title: 'Contact Our Real Estate Advisors in Agra',
  description:
    "Connect with MPD Realteck's brokerage desks in Agra for property acquisition, leasing, and consulting. Visit our Shastripuram or Sanjay Place offices.",
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <div className="h-1.5 w-full bg-blue-600" />
      <ContactInterfaceSection />
    </main>
  )
}