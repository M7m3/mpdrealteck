import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SERVICES = [
  {
    name: 'Corporate Land Leasing',
    description: 'Grade-A office and commercial space leased directly across Agra and Noida, from term sheet to fit-out.',
    image: 'https://images.unsplash.com/photo-1637393932938-b9c209e67d5c',
    alt: 'Modern glass office building leased through MPD Realteck corporate leasing services',
    href: '/corporate-leasing',
  },
  {
    name: 'Land & Plot Investment',
    description: 'RERA-verified plots and commercial land across Agra, Noida, and emerging growth corridors, vetted before they reach you.',
    image: 'https://images.unsplash.com/photo-1515259387710-51e175f9ec6d',
    alt: 'Aerial view of a land plot available for real estate investment',
    href: '/invest',
  },
  {
    name: 'Buying & Selling',
    description: 'Direct brokerage for residential, commercial, and industrial property, with clear-title verification on every transaction.',
    image: 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9',
    alt: 'Real estate agent handing over property keys after a sale',
    href: '/buy',
  },
  {
    name: 'MPD Construction',
    description: 'In-house construction and project execution, from groundbreaking to handover, built to RERA compliance standards.',
    image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c',
    alt: 'Active construction site managed by MPD Construction',
    href: '/contact',
  },
  {
    name: 'Interior Designing',
    description: 'Space planning and interior fit-outs for residential and corporate clients, delivered alongside your construction timeline.',
    image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77',
    alt: 'Modern interior design fit-out for a residential space',
    href: '/contact',
  },
  {
    name: 'Corporate Real Estate Services',
    description: 'Workplace strategy, relocation, and facility planning for growing businesses across our operating markets.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    alt: 'Corporate team in a business meeting discussing workplace real estate strategy',
    href: '/contact',
  },
  {
    name: 'Due Diligence & Investigation',
    description: 'Title search, encumbrance checks, and RERA compliance verification before you commit capital.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    alt: 'Architect and consultant reviewing property blueprints for due diligence',
    href: '/contact',
  },
  {
    name: 'Real Estate Consulting & Advisory',
    description: 'Investment strategy, acquisition planning, and end-to-end advisory across every stage of a deal.',
    image: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca',
    alt: 'Real estate consultant shaking hands with a client after an advisory meeting',
    href: '/contact',
  },
]

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
      areaServed: ['Agra', 'Noida', 'Vrindavan'],
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
            <Link
              key={service.name}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-900 sm:h-44">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                  Learn More
                  <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
