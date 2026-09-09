import React from 'react'
import SellPropertySection from '@/components/sections/sellYourProperty/Sell'

export const metadata = {
  title: 'Sell Premium Property | Capital Portfolio Onboarding',
  description: 'Submit your premium real estate asset credentials. Access our institutional investment network, localized zoning validations, and premier regional transaction agents.',
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