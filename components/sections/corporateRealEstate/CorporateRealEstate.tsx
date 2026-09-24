"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const OFFERINGS = [
  {
    name: 'Workplace Strategy & Space Planning',
    description: 'We size and plan your office footprint against actual headcount and growth projections.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    ),
  },
  {
    name: 'Office Relocation & Fit-Out Management',
    description: 'End-to-end management of your move, from site handover to furniture and fit-out sign-off.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    ),
  },
  {
    name: 'Facility & Lease Portfolio Management',
    description: 'Ongoing oversight of lease renewals, compliance dates, and multi-site facility coordination.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 17.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    ),
  },
  {
    name: 'Site Selection for Expansion',
    description: 'Market screening and site shortlisting when you are opening a new location or additional office.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    ),
  },
]

const GALLERY = [
  {
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786',
    alt: 'Corporate boardroom used for client strategy meetings',
    caption: 'Boardroom Strategy Sessions',
  },
  {
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    alt: 'Modern corporate office building exterior',
    caption: 'Grade-A Office Buildings',
  },
  {
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
    alt: 'Open-plan corporate workspace',
    caption: 'Workplace Environments',
  },
]

const PROCESS = [
  { step: '1', title: 'Needs Assessment', description: 'We map your headcount, growth plan, and budget against current lease obligations.' },
  { step: '2', title: 'Site & Strategy Options', description: 'You receive shortlisted sites or a renewal strategy, benchmarked against the market.' },
  { step: '3', title: 'Relocation & Fit-Out Management', description: 'We manage the move and fit-out end to end, so your team focuses on the business.' },
]

export default function CorporateRealEstate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    areaOfInterest: OFFERINGS[0].name,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Corporate real estate inquiry submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', areaOfInterest: OFFERINGS[0].name, message: '' })
  }

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32" id="corporate-real-estate-services">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* What We Manage */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">What We Manage</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Your real estate, run like a function.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            For growing businesses, real estate is rarely a one-time decision. Our corporate desk stays engaged as your needs change.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {OFFERINGS.map((offering) => (
            <div
              key={offering.name}
              className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  {offering.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-slate-900">{offering.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{offering.description}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-24 lg:mt-32">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Client Environments</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Spaces built for how businesses run.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {GALLERY.map((item) => (
              <div key={item.caption} className="group relative h-64 overflow-hidden rounded-xl border border-slate-200/60 bg-slate-900 shadow-sm sm:h-80">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-sm font-bold text-white">{item.caption}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">How We Work</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From assessment to move-in.
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
        <div id="corporate-real-estate-inquiry" className="scroll-mt-24 md:scroll-mt-32 mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Corporate Desk</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Talk to Our Corporate Desk
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Tell us about your business and an advisor will follow up to discuss your real estate needs.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Inquiry submitted successfully</p>
                  <p className="mt-1 text-xs text-emerald-700">Our corporate desk will respond within 24 hours.</p>
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
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Company Name</label>
                  <input
                    type="text"
                    required
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
                  {OFFERINGS.map((offering) => (
                    <option key={offering.name} value={offering.name}>{offering.name}</option>
                  ))}
                  <option value="Other">Other / Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Tell Us About Your Business</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your team size, current lease situation, and timeline..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Talk to Our Corporate Desk
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3 font-mono">
                  Routed Directly to the Corporate Desk
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
