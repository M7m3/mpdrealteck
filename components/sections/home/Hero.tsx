"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const CAROUSEL_IMAGES = [
  { id: 'hero1', src: '/commonImages/hero1.webp', alt: 'Premium real estate showcase' },
  { id: 'corporate', src: '/commonImages/corporateleasing1.webp', alt: 'Corporate leasing and office spaces' },
  { id: 'buysell', src: '/commonImages/buyandsell1.webp', alt: 'Property buying and selling services' },
  { id: 'land', src: '/commonImages/landtrading1.webp', alt: 'Strategic land trading opportunities' }
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
    <div className="relative mt-0 w-full min-h-[75vh] sm:min-h-[80vh] overflow-hidden bg-slate-900 md:mt-16">
      {/* Background Image Container */}
      <Image
        src="/commonImages/hero4.webp"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      
      {/* Dark overlay to help with text contrast later */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating Image Circle Frame */}
      {/* Reduced sizes slightly and optimized border/background styling to eliminate unpolished whitespace halos */}
      <div className="absolute left-8 top-1/2 z-20 h-28 w-28 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl md:left-28 md:h-56 md:w-56">
        
        {/* Hardware-Accelerated Sliding Track Container */}
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
                sizes="(max-width: 768px) 112px, 224px"
                className="object-cover object-center"
                // Preload the first couple images for immediate performance
                priority={img.id === 'hero1' || img.id === 'corporate'}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-[75vh] sm:min-h-[80vh] w-full items-center justify-center px-4">
        {/* Content goes here */}
      </div>
    </div>
  )
}