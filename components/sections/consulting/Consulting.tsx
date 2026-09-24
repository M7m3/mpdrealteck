"use client"

import React, { useState } from 'react'

const ADVISORY_AREAS = [
  {
    name: 'Investment Strategy & Portfolio Planning',
    description: 'We help you set an acquisition thesis, target yields, and asset mix before you deploy capital, not after.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    ),
  },
  {
    name: 'Acquisition & Site Selection',
    description: 'From shortlisting markets to negotiating terms, we run point on sourcing and evaluating the right asset for your brief.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    ),
  },
  {
    name: 'Corporate Real Estate & Workplace Strategy',
    description: 'Office footprint planning, relocation, and space utilization advisory for growing and scaling businesses.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    ),
  },
  {
    name: 'Leasing Strategy & Negotiation',
    description: 'Term structuring, market benchmarking, and negotiation support so you lease on terms that hold up over time.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    ),
  },
  {
    name: 'Development & Construction Advisory',
    description: 'Feasibility studies, contractor selection support, and project oversight for ground-up development.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375c.905 0 1.625-.72 1.625-1.625 0-.906-.72-1.625-1.625-1.625H9m0 0V9m0 3h3.75M9 15h3.375M12 3v18m0 0H3m9 0h9" />
    ),
  },
  {
    name: 'NRI & Institutional Investment Advisory',
    description: 'Remote-friendly diligence, documentation, and transaction management for NRI buyers and institutional funds.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    ),
  },
]

const PROCESS = [
  {
    step: '1',
    title: 'Discovery Call',
    description: 'We start by understanding your objectives, budget, timeline, and risk appetite.',
  },
  {
    step: '2',
    title: 'Strategy & Options',
    description: 'Our advisors map viable markets, assets, and deal structures against your goals.',
  },
  {
    step: '3',
    title: 'Execution Support',
    description: 'We stay engaged through negotiation, due diligence, and closing, not just the pitch.',
  },
]

export default function Consulting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    areaOfInterest: ADVISORY_AREAS[0].name,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Consulting inquiry submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', areaOfInterest: ADVISORY_AREAS[0].name, message: '' })
  }

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32" id="consulting-services">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* What We Advise On */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">What We Advise On</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            One advisory desk, every stage of the deal.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Whether you are planning your first acquisition or managing a growing portfolio, our advisors work alongside you from strategy through closing.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADVISORY_AREAS.map((area) => (
            <div
              key={area.name}
              className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  {area.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-slate-900">{area.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">How We Work</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From first call to closing.
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
        <div id="consulting-inquiry" className="scroll-mt-24 md:scroll-mt-32 mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Consulting Desk</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Request a Consultation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Tell us what you are trying to achieve and an advisor will follow up to schedule a call.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Consultation request submitted successfully</p>
                  <p className="mt-1 text-xs text-emerald-700">An advisor will respond within 24 hours.</p>
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
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Company Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., Acme Enterprises"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
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
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Area of Interest</label>
                <select
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.areaOfInterest}
                  onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                >
                  {ADVISORY_AREAS.map((area) => (
                    <option key={area.name} value={area.name}>{area.name}</option>
                  ))}
                  <option value="Other">Other / Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">What Are You Trying to Achieve?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your goals, timeline, and budget range..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Request a Consultation
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3 font-mono">
                  Routed Directly to the Consulting Desk
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
