"use client"

import React, { useState } from 'react'

const CHECKS = [
  {
    name: 'Title Search & Chain of Ownership',
    description: 'We trace the property’s ownership history back through prior sale deeds to confirm the seller holds clear, marketable title.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 17.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    ),
  },
  {
    name: 'Encumbrance Certificate Verification',
    description: 'We pull and review encumbrance records to confirm the asset is free of unpaid loans, mortgages, or competing legal claims.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    ),
  },
  {
    name: 'RERA Registration & Compliance',
    description: 'For under-construction assets, we confirm active RERA registration and check the promoter’s compliance and litigation record.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.173-.443.833-.443 1.006 0l2.094 5.258 5.688.43c.48.036.672.624.293.94l-4.242 3.904 1.316 5.592c.11.468-.389.83-.818.554l-5.022-2.642-5.022 2.642c-.43.276-.928-.086-.818-.554l1.316-5.592-4.243-3.904c-.379-.317-.187-.904.292-.94l5.688-.43 2.094-5.258Z" />
    ),
  },
  {
    name: 'Zoning & Land-Use Verification',
    description: 'We confirm the land’s approved use against the local development authority’s master plan before you build or lease on it.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    ),
  },
  {
    name: 'Litigation & Dispute History',
    description: 'We check civil and revenue court records for pending disputes, injunctions, or attachment orders tied to the property or seller.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    ),
  },
  {
    name: 'Physical Site & Boundary Verification',
    description: 'Our field team walks the site to confirm boundaries, access, and physical condition match the paperwork before you sign.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    ),
  },
]

const PROCESS = [
  {
    step: '1',
    title: 'Document Collection',
    description: 'Share the property’s title deed, registry extracts, and RERA number. We compile a document checklist specific to the asset type.',
  },
  {
    step: '2',
    title: 'Verification & Field Investigation',
    description: 'We cross-check municipal and encumbrance records, then conduct a physical site verification against the paperwork.',
  },
  {
    step: '3',
    title: 'Due Diligence Report',
    description: 'You receive a clear, actionable report flagging every risk, before you sign an agreement or transfer funds.',
  },
]

export default function DueDiligence() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    propertyType: 'Residential',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Due diligence inquiry submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', location: '', propertyType: 'Residential', message: '' })
  }

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32" id="due-diligence-services">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* What We Verify */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">What We Verify</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Six checks, before you commit capital.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Every due diligence engagement covers the same rigorous checklist, regardless of asset size or location.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHECKS.map((check) => (
            <div
              key={check.name}
              className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  {check.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-slate-900">{check.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{check.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">The Process</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From documents to a decision.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROCESS.map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <div id="due-diligence-inquiry" className="scroll-mt-24 md:scroll-mt-32 mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Due Diligence Desk</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Request a Due Diligence Report
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Tell us about the property and we will scope a verification report before you proceed.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Due diligence request submitted successfully</p>
                  <p className="mt-1 text-xs text-emerald-700">Our due diligence desk will respond within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Phone Number</label>
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
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Property Location</label>
                  <input
                    type="text"
                    required
                    placeholder="City, State"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Property Type</label>
                <select
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Agricultural">Agricultural / Land</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">What Would You Like Verified?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline the property details, transaction stage, and any specific concerns..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Request Due Diligence Report
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3 font-mono">
                  Routed Directly to the Due Diligence Desk
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
