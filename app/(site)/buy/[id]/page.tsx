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
      title: "Asset Not Found",
      description: "The requested property profile could not be located."
    }
  }

  return {
    title: `${property.name} | Portfolio Detail`,
    description: `Explore structural profiles and pricing for ${property.name}.`
  }
}

// 2. Main Route Page Export (Receives Next.js async params)
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const property = await getPropertyBySlug('buy', resolvedParams.id)
  const asset = property ? toBuyAsset(property) : null

  return <PropertyIndi asset={asset} />
}
