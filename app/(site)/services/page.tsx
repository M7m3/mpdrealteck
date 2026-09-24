import React from 'react'
import { SERVICES } from '@/lib/services'
import ServiceCard from '@/components/sections/services/ServiceCard'

export const metadata = {
  title: 'All Our Real Estate Services',
  description:
    'Explore every MPD Realteck service in one place: corporate leasing, land investment, buying & selling, construction, interior design, due diligence, and consulting, across India.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16 md:pt-24">
      {/* Editorial Header Segment */}
      <div className="relative bg-slate-900 py-20 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            All Services
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.1]">
            Every Real Estate Service, In One Place
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            From land acquisition to interior fit-outs, here is everything MPD Realteck can help with, wherever you are in India.
          </p>
        </div>
      </div>

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
