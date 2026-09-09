import React from 'react'
import PropertyForm from '@/components/admin/PropertyForm'

export default function NewPropertyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white">Add Property</h1>
      <p className="mt-1 text-sm text-slate-400">Create a new Buy or Corporate Leasing listing.</p>
      <div className="mt-8">
        <PropertyForm />
      </div>
    </div>
  )
}
