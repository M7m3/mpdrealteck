"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CAROUSEL_IMAGES = [
  { id: 'hero1', src: '/commonImages/hero1.webp', alt: 'Premium real estate showcase' },
  { id: 'corporate', src: '/commonImages/corporateleasing1.webp', alt: 'Corporate leasing and office spaces' },
  { id: 'buysell', src: '/commonImages/buyandsell1.webp', alt: 'Property buying and selling services' },
  { id: 'land', src: '/commonImages/landtrading1.webp', alt: 'Strategic land trading opportunities' }
]

const TRUST_STRIP = [
  '40+ Years of Legacy',
  '100% Clear Title Verified',
  'UP-RERA Compliant',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Slide automatically every 4 seconds
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length)
    }, 4000)

    // Clear interval when component unmounts to prevent memory leaks
    return () => clearInterval(slideTimer)
  }, [])

  return (
    <div className="relative mt-0 w-full min-h-[85vh] sm:min-h-[80vh] overflow-hidden bg-slate-900 md:mt-16">
      {/* Background Image Container */}
      <Image
        src="/commonImages/hero4.webp"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark gradient overlay for text legibility, weighted toward the content side */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/30 sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/55 sm:to-slate-950/10" />

      {/* Floating Portfolio Preview Carousel — tucked into a corner so it never competes with headline copy */}
      <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-2 md:bottom-10 md:right-10">
        <span className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-md sm:block">
          Portfolio Preview
        </span>
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl md:h-32 md:w-32">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {CAROUSEL_IMAGES.map((img) => (
              <div key={img.id} className="relative h-full w-full shrink-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 80px, 128px"
                  className="object-cover object-center"
                  priority={img.id === 'hero1' || img.id === 'corporate'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-[85vh] sm:min-h-[80vh] w-full items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Institutional Real Estate & Land Trading
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
              Verified real estate.
              <br />
              <span className="text-blue-400">Zero intermediary risk.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 lg:text-lg">
              Four decades of direct brokerage across Agra, Vrindavan, Noida, and beyond. Clear-title land, corporate leasing, and RERA-certified residential inventory — sourced and verified before it ever reaches you.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/buy">
                <button className="rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Explore Active Inventory
                </button>
              </Link>
              <Link href="/contact">
                <button className="rounded-lg border border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/15">
                  Talk to an Advisor
                </button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {TRUST_STRIP.map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-300">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
