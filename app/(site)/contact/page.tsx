import React from 'react'
import ContactInterfaceSection from '@/components/sections/contact/ContactInterface'

export const metadata = {
  title: 'Contact Advisory Group | Institutional Real Estate Placement',
  description: 'Connect directly with our senior corporate brokerage desks. Schedule asset briefings at our Shastripuram or Sanjay Place offices in Agra.',
}

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <div className="h-1.5 w-full bg-blue-600" />
      <ContactInterfaceSection />
    </main>
  )
}