import React from 'react'
import PropertyIndi from '@/components/sections/buyProperty/PropertyIndi' // Adjust this path to wherever your PropertyIndi component lives
import { PROPERTIES_DB } from '@/data/db'

interface PageProps {
  params: Promise<{ id: string }>
}

// 1. Metadata Generation (Handles SEO and tab titles)
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const asset = PROPERTIES_DB.find((item) => item.id === resolvedParams.id)
   
  if (!asset) {
    return {
      title: "Asset Not Found",
      description: "The requested property profile could not be located."
    }
  }

  return {
    title: `${asset.name} | Portfolio Detail`,
    description: `Explore structural profiles and pricing for ${asset.name}.`
  }
}

// 2. Main Route Page Export (Receives Next.js async params)
export default async function Page({ params }: PageProps) {
  // Await the promise to extract the dynamic ID safely
  const resolvedParams = await params
  
  // Pass it directly into your clean presentation component
  return <PropertyIndi id={resolvedParams.id} />
}