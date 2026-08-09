"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CORPORATE_LEASING_DB } from '@/data/corporateLeasing'

export default function CorporateLeasing() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    property: CORPORATE_LEASING_DB[0].name,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false);

  const handleEnquire = (propertyName: string) => {
    setFormData((prev) => ({ ...prev, property: propertyName }))
    setSubmitted(false)
    document.getElementById('leasing-inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Corporate leasing inquiry submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', company: '', email: '', phone: '', property: CORPORATE_LEASING_DB[0].name, message: '' })
  }

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32" id="corporate-leasing-assets">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {CORPORATE_LEASING_DB.map((asset) => (
            <div
              key={asset.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72 w-full overflow-hidden bg-slate-900 shadow-inner sm:h-96">
                <Image
                  src={asset.image}
                  alt={`${asset.name} corporate leasing asset imagery`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover ${asset.imagePosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="rounded bg-slate-900/90 border border-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                    {asset.status}
                  </span>
                  <span className="rounded bg-blue-600/90 border border-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                    For Corporate Leasing
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>{asset.location}</span>
                </div>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{asset.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{asset.tagline}</p>
                {asset.developer && (
                  <span className="mt-1 block text-[11px] font-medium font-mono text-slate-400 tracking-tight">
                    Developer: {asset.developer}
                  </span>
                )}

                {/* Floor Areas Table */}
                <div className="mt-5 grid grid-cols-2 gap-2 rounded-lg bg-slate-50 border border-slate-100 p-4 sm:grid-cols-2">
                  {asset.floorAreas.map((floor) => (
                    <div key={floor.level} className="text-xs">
                      <span className="block font-bold uppercase tracking-wide text-slate-400 text-[10px]">{floor.level}</span>
                      <span className="block font-semibold text-slate-800 mt-1">{floor.detail}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="mt-5 space-y-2">
                  {asset.highlights.map((point) => (
                    <li key={point} className="flex gap-2 text-xs leading-relaxed text-slate-600">
                      <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-slate-400">Availability</span>
                    <span className="block font-bold text-slate-800 mt-1">{asset.availability}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-slate-400">Compliance</span>
                    <span className="block font-bold text-emerald-600 mt-1">{asset.reraStatus}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleEnquire(asset.name)}
                    className="flex-1 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]"
                  >
                    Enquire for Leasing
                  </button>
                  {asset.detailHref && (
                    <Link href={asset.detailHref} className="flex-1">
                      <button className="w-full rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900">
                        View Full Profile
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leasing Inquiry Form */}
        <div id="leasing-inquiry" className="scroll-mt-24 md:scroll-mt-32 mt-20 lg:mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Leasing Desk</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Reach Out for Corporate Leasing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Tell us your space and timeline requirements — our leasing desk will follow up with floor plans, availability, and commercial terms.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Leasing inquiry submitted successfully</p>
                  <p className="mt-1 text-xs text-emerald-700">Our corporate leasing desk will respond within 24 hours.</p>
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
                    placeholder="e.g., Mandeep Singh"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Company Name</label>
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
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Property of Interest</label>
                <select
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.property}
                  onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                >
                  {CORPORATE_LEASING_DB.map((asset) => (
                    <option key={asset.id} value={asset.name}>{asset.name}</option>
                  ))}
                  <option value="Other">Other / Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Space Requirement & Timeline</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline area required, preferred floor, budget range, and target move-in timeline..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Submit Leasing Inquiry
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3 font-mono">
                  Routed Directly to the Corporate Leasing Desk
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
