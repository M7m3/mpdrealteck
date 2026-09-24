import type { Metadata } from 'next'
import CallToAction from '@/components/sections/home/CallToAction'
import FeaturedProperties from '@/components/sections/home/FeaturedProperties'
import Hero from '@/components/sections/home/Hero'
import Invest from '@/components/sections/home/Invest'
import Services from '@/components/sections/home/Services'
import { getProperties, toBuyAsset } from '@/lib/properties'

export const metadata: Metadata = {
  // Next.js does not apply the root layout's title template to a page.tsx
  // in the same route segment as that layout, so the home page spells out
  // the full "<page> | MPD Realteck" title explicitly.
  title: 'Corporate Leasing & Land Investment in Agra | MPD Realteck',
  description:
    'MPD Realteck offers corporate land leasing, RERA-verified plot investment, due diligence, and real estate consulting across Agra, Noida & Vrindavan.',
  alternates: { canonical: '/' },
}

export default async function Home() {
  const properties = await getProperties('buy')
  const featuredAssets = properties.slice(0, 4).map(toBuyAsset)

  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <Services />
      <Invest/>
      <FeaturedProperties properties={featuredAssets} />
      <CallToAction/>
           {/* Other sections will go here */}
    </main>
  )
}
