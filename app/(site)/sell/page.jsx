import React from 'react'
import SellPropertySection from '@/components/sections/sellYourProperty/Sell'

export const metadata = {
  title: 'Sell Your Property in Agra & Noida',
  description:
    'List your residential, commercial, or industrial property with MPD Realteck. Get a free valuation and RERA-compliant closing support in Agra and Noida.',
  alternates: { canonical: '/sell' },
}

export default function SellPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      {/* Decorative top clearance line to anchor the architectural layout style */}
      <div className="h-1.5 w-full bg-blue-600" />
      
      {/* 
        Modular Premium Placement Node
        Renders the corporate hero grid, structured workflow cards, and RERA intake form
      */}
      <SellPropertySection />
    </main>
  )
}