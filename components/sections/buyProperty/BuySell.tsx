"use client"

import React, { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import PropertyAll from '@/components/sections/buyProperty/PropertyAll'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BuyAsset = Record<string, any>

type Mode = 'buy' | 'sell'

function ModeToggle({ mode, onChange }: { mode: Mode; onChange: (mode: Mode) => void }) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
        {(['buy', 'sell'] as Mode[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={mode === option}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
              mode === option ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {option === 'buy' ? 'Buy Properties' : 'Sell Your Property'}
          </button>
        ))}
      </div>
    </div>
  )
}

function SellPanel() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyType: 'Residential',
    expectedPrice: '',
    location: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sell inquiry submitted:', formData)
    setSubmitted(true)
    setFormData({ fullName: '', email: '', phone: '', propertyType: 'Residential', expectedPrice: '', location: '' })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Three-Step Workflow */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold font-mono">The Liquidation Process</h2>
        <h3 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">How We Position Your Listing For Success</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375c.905 0 1.625-.72 1.625-1.625 0-.906-.72-1.625-1.625-1.625H9m0 0V9m0 3h3.75M9 15h3.375M12 3v18m0 0H3m9 0h9" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-slate-900 tracking-tight">1. Precision Valuation</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Our market intelligence engines analyze localized zoning maps, recent registry records, and capital projections to baseline true institutional value.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h3.75v3.75H5.25V7.5ZM5.25 12.75h3.75v3.75H5.25v-3.75Z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-slate-900 tracking-tight">2. Curated Matchmaking</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Your structural profiles bypass standard noise thresholds and route immediately into the active private portfolios of highly qualified premium buyers.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
          <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-slate-900 tracking-tight">3. Regulated Escrow Close</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Our legal and authority advisors structure standard asset conversions with perfect transparency, handling RERA compliance checkpoints explicitly.
          </p>
        </div>
      </div>

      {/* Valuation Form & Context Split */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-slate-200 pt-16">
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            Connect Directly with Senior Portfolio Advising Specialists
          </h3>
          <p className="leading-relaxed text-slate-600">
            We never utilize decentralized marketplace scrapers. Every listing onboarding process is supervised directly by verified regional specialists.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="mt-1 h-5 w-5 text-blue-600 shrink-0">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-slate-900">Direct Brokerage Assignment</h5>
                <p className="text-xs text-slate-600 mt-1">Your property file maps onto a local executive expert holding specific geographic authority clearances.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 h-5 w-5 text-blue-600 shrink-0">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-slate-900">Targeted Marketing Matrices</h5>
                <p className="text-xs text-slate-600 mt-1">We design specialized collateral packages targeting corporate trusts, private equities, and retail funds.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-xl border border-slate-200/60 bg-white p-8 shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-6">Initialize Listing Intake Profile</h4>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Listing intake submitted successfully</p>
                  <p className="mt-1 text-xs text-emerald-700">A senior portfolio advisor will reach out within 12 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full legal name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Contact Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Property Type</label>
                  <select
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm bg-white outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-700"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Agricultural">Agricultural / Land</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Geographic Location</label>
                  <input
                    type="text"
                    required
                    placeholder="City, State"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Expected Price Range</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., ₹2.5 Crores"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.expectedPrice}
                    onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full text-center rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Submit Listing Intake
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3 font-mono">
                  Routed Directly to the Sell Desk
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function BuySellInner({ properties }: { properties: BuyAsset[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode: Mode = searchParams.get('mode') === 'sell' ? 'sell' : 'buy'

  const handleChange = (next: Mode) => {
    router.replace(next === 'sell' ? '/buy?mode=sell' : '/buy', { scroll: false })
  }

  return (
    <>
      <div className="relative -mt-8 mb-8 lg:-mt-10">
        <ModeToggle mode={mode} onChange={handleChange} />
      </div>

      {mode === 'buy' ? (
        <PropertyAll properties={properties} />
      ) : (
        <section className="relative bg-slate-50 py-16 lg:py-24" id="sell-your-property">
          <SellPanel />
        </section>
      )}
    </>
  )
}

export default function BuySell({ properties }: { properties: BuyAsset[] }) {
  return (
    <Suspense fallback={null}>
      <BuySellInner properties={properties} />
    </Suspense>
  )
}
