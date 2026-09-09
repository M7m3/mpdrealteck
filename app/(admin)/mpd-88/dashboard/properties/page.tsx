import React from 'react'
import Link from 'next/link'
import { getAllPropertiesAdmin } from '@/lib/properties'
import PropertiesTable from '@/components/admin/PropertiesTable'

export default async function AdminPropertiesPage() {
  const properties = await getAllPropertiesAdmin()

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Properties</h1>
          <p className="mt-1 text-sm text-slate-400">Add, edit, or remove listings across Buy and Corporate Leasing.</p>
        </div>
        <Link
          href="/mpd-88/dashboard/properties/new"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700"
        >
          + Add Property
        </Link>
      </div>

      <PropertiesTable properties={properties} />
    </div>
  )
}
