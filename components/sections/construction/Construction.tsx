"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const OFFERINGS = [
  {
    name: 'Residential Developments',
    description: 'Apartments, villas, and plotted residential projects built to modern living standards.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    ),
  },
  {
    name: 'Commercial & Office Buildings',
    description: 'Grade-A commercial construction, from shell and core to full corporate fit-out.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    ),
  },
  {
    name: 'Industrial & Warehousing',
    description: 'Factory floors, warehousing, and logistics facilities engineered for operational efficiency.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
    ),
  },
  {
    name: 'Renovation & Retrofitting',
    description: 'Structural upgrades and renovation work for existing buildings and legacy properties.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    ),
  },
]

const GALLERY = [
  {
    image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',
    alt: 'Construction crane on an MPD Construction commercial site',
    caption: 'Commercial Site Execution',
  },
  {
    image: 'https://images.unsplash.com/photo-1551711974-faf378be34b2',
    alt: 'Residential building under construction',
    caption: 'Residential Development',
  },
  {
    image: 'https://images.unsplash.com/photo-1539269071019-8bc6d57b0205',
    alt: 'Structural progress on a building under construction',
    caption: 'Structural Progress',
  },
]

const PROCESS = [
  { step: '1', title: 'Site Assessment & Planning', description: 'We evaluate the site, finalize structural plans, and secure the approvals needed before groundbreaking.' },
  { step: '2', title: 'Construction & Project Management', description: 'In-house teams manage execution, quality checks, and timelines, with regular progress reporting.' },
  { step: '3', title: 'Handover & Compliance Sign-off', description: 'Final inspections, RERA and municipal sign-offs, and a clean handover of documentation.' },
]

export default function Construction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'Residential',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Construction inquiry submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', location: '', projectType: 'Residential', message: '' })
  }

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32" id="construction-services">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* What We Build */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">What We Build</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            One construction desk, every asset class.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            MPD Construction manages execution in-house, so the same team that breaks ground signs off on handover.
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
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">On Site</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Active builds, managed in-house.
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
        <div className="mt-24 lg:mt-32" id="construction-process">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">The Process</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From groundbreaking to handover.
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
        <div id="construction-inquiry" className="scroll-mt-24 md:scroll-mt-32 mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Construction Desk</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get a Construction Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Tell us about your project and our construction desk will scope timelines and costs.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Construction inquiry submitted successfully</p>
                  <p className="mt-1 text-xs text-emerald-700">Our construction desk will respond within 24 hours.</p>
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
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Project Location</label>
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
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Project Type</label>
                <select
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Renovation">Renovation / Retrofit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Project Brief</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline the scope, approximate area, and target timeline..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Get a Construction Quote
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3 font-mono">
                  Routed Directly to the Construction Desk
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
