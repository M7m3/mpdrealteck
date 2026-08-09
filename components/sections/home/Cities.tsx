"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CITIES_DATA = [
  {
    name: 'Agra',
    tag: 'Commercial & Hospitality Land',
    image: '/cities/agra.webp',
    gridClass: 'lg:col-span-1',
  },
  {
    name: 'Vrindavan',
    tag: 'Premium Real Estate Developments',
    image: '/cities/vrindavan.webp',
    gridClass: 'lg:col-span-1',
  },
  {
    name: 'Noida',
    tag: 'Corporate Infrastructure & Tech Parks',
    image: '/cities/noida.webp',
    gridClass: 'lg:col-span-1',
  },
  {
    name: 'Dholera',
    tag: 'Special Investment Region (SIR)',
    image: '/cities/dholera.jpg',
    gridClass: 'lg:col-span-2',
  },
  {
    name: 'Bombay',
    tag: 'High-Value Asset Portfolios',
    image: '/cities/bombay.webp',
    gridClass: 'lg:col-span-1',
  },
  {
    name: 'Goa',
    tag: 'Luxury Hospitality & Leisure Assets',
    image: '/cities/goa.webp',
    gridClass: 'lg:col-span-1',
  },
  {
    name: 'Ayodhya',
    tag: 'High-Growth Strategic Corridors',
    image: '/cities/ayodhya.webp',
    gridClass: 'lg:col-span-2',
  },
]

export default function Cities() {
  return (
    <section className="bg-white py-20 lg:py-32" id="cities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Strategic Footprint
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Strategic markets under active management.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We target high-yield micro-markets undergoing massive macroeconomic shifts. From tech infrastructure hubs to high-growth special investment zones, discover our operational corridors.
          </p>
        </div>

        {/* Asymmetrical Bento-Inspired Layout Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES_DATA.map((city) => (
            <div
              key={city.name}
              className={`group relative overflow-hidden rounded-xl border border-slate-200/60 bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${city.gridClass}`}
            >
              {/* Asset Container Box */}
              <div className="relative h-72 w-full sm:h-80 lg:h-96">
                <Image
                  src={city.image}
                  alt={`${city.name} commercial real estate market asset overview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center opacity-80 transition-transform duration-500 scale-100 group-hover:scale-[1.04]"
                />
                
                {/* Custom Gradient Underlay Layer for Typographic Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
              </div>

              {/* Text Meta Content Details */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {city.tag}
                </span>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                  {city.name}
                </h3>
                
                {/* Smooth Hidden Action Trigger Link */}
                <div className="mt-4 flex items-center space-x-2 text-sm font-semibold text-white/90 opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link href="/buy" className="hover:underline focus:outline-none">
                    Explore Inventory
                  </Link>
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}