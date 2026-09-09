import React from 'react'
import { notFound } from 'next/navigation'
import { getPropertyById } from '@/lib/properties'
import PropertyForm from '@/components/admin/PropertyForm'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditPropertyPage({ params }: PageProps) {
  const { id } = await params
  const property = await getPropertyById(id)
  if (!property) notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white">Edit Property</h1>
      <p className="mt-1 text-sm text-slate-400">{property.name}</p>
      <div className="mt-8">
        <PropertyForm property={property} />
      </div>
    </div>
  )
}
