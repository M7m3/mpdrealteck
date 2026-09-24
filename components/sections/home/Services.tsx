import React from 'react'
import { SERVICES } from '@/lib/services'
import ServiceCard from '@/components/sections/services/ServiceCard'

const SERVICES_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: SERVICES.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: { '@type': 'RealEstateAgent', name: 'MPD Realteck' },
      areaServed: { '@type': 'Country', name: 'India' },
    },
  })),
}

export default function Services() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-32" id="services">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_JSON_LD) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Every real estate service, end to end.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From land acquisition and MPD Construction to interior fit-outs, corporate leasing, and advisory, we manage the complete lifecycle of your property under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
