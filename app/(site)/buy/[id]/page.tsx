import React from 'react'
import PropertyIndi from '@/components/sections/buyProperty/PropertyIndi'
import { getPropertyBySlug, toBuyAsset } from '@/lib/properties'

interface PageProps {
  params: Promise<{ id: string }>
}

// 1. Metadata Generation (Handles SEO and tab titles)
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const property = await getPropertyBySlug('buy', resolvedParams.id)

  if (!property) {
    return {
      title: 'Property Not Found',
      description: 'The requested property listing could not be located.',
    }
  }

  const city = property.city ? `, ${property.city}` : ''
  const location = property.city ? ` in ${property.city}` : ''

  return {
    title: `${property.name}${city} | Price & Availability`,
    description: `View pricing, unit types, RERA status, and plot details for ${property.name}${location}, a verified property listed with MPD Realteck.`,
    alternates: { canonical: `/buy/${property.slug}` },
    openGraph: property.image
      ? { images: [{ url: property.image, width: 1200, height: 630, alt: property.name }] }
      : undefined,
  }
}

// 2. Main Route Page Export (Receives Next.js async params)
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const property = await getPropertyBySlug('buy', resolvedParams.id)
  const asset = property ? toBuyAsset(property) : null

  return <PropertyIndi asset={asset} />
}
