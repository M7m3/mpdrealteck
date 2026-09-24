"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const OFFERINGS = [
  {
    name: 'Residential Interiors',
    description: 'Full-home and single-room design, from concept boards to final styling and handover.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
    ),
  },
  {
    name: 'Corporate & Office Interiors',
    description: 'Workplace interiors that reflect brand identity and support how teams actually work.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    ),
  },
  {
    name: 'Modular Kitchens & Wardrobes',
    description: 'Space-efficient, custom-built modular solutions engineered for daily use.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375c.905 0 1.625-.72 1.625-1.625 0-.906-.72-1.625-1.625-1.625H9m0 0V9m0 3h3.75M9 15h3.375M12 3v18m0 0H3m9 0h9" />
    ),
  },
  {
    name: 'Turnkey Fit-Outs',
    description: 'A single point of accountability from design to execution, with construction handled in-house.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    ),
  },
]

const GALLERY = [
  {
    image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28',
    alt: 'Modern kitchen interior designed by MPD Realteck',
    caption: 'Modular Kitchen Design',
  },
  {
    image: 'https://images.unsplash.com/photo-1688647063090-36f36f692d95',
    alt: 'Residential interior living space design',
    caption: 'Residential Living Space',
  },
  {
    image: 'https://images.unsplash.com/photo-1598928387577-d49b6d399110',
    alt: 'Interior design detail and styling',
    caption: 'Interior Styling',
  },
]

const PROCESS = [
  { step: '1', title: 'Design Consultation', description: 'We walk the space, understand your brief and budget, and scope the design engagement.' },
  { step: '2', title: '3D Concept & Material Selection', description: 'You review 3D concepts, finishes, and material boards before anything is fabricated.' },
  { step: '3', title: 'Execution & Styling', description: 'Our in-house team executes the fit-out and completes final styling before handover.' },
]

export default function InteriorDesign() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    spaceType: 'Residential',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Interior design inquiry submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', location: '', spaceType: 'Residential', message: '' })
  }

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32" id="interior-design-services">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* What We Design */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">What We Design</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Design and execution, under one roof.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From a single modular kitchen to a full corporate fit-out, our design team stays involved through delivery.
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
        <div className="mt-24 lg:mt-32" id="interior-design-gallery">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Work</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A look inside recent projects.
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
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">The Process</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From concept to move-in.
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
        <div id="interior-design-inquiry" className="scroll-mt-24 md:scroll-mt-32 mt-24 lg:mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Design Desk</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Start Your Design Project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Tell us about your space and our design team will follow up to schedule a consultation.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Design inquiry submitted successfully</p>
                  <p className="mt-1 text-xs text-emerald-700">Our design desk will respond within 24 hours.</p>
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
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Space Type</label>
                <select
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.spaceType}
                  onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                >
                  <option value="Residential">Residential</option>
                  <option value="Corporate">Corporate / Office</option>
                  <option value="Retail">Retail</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Tell Us About the Space</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline the area, style preferences, and target timeline..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Start Your Design Project
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3 font-mono">
                  Routed Directly to the Design Desk
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
