import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ServiceEntry } from '@/lib/services'

export default function ServiceCard({ service }: { service: ServiceEntry }) {
  return (
    <Link
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
  )
}
