import { unstable_cache, revalidateTag } from 'next/cache'
import { prisma } from '@/lib/prisma'
import type { Property } from '@prisma/client'

export type PropertySource = 'buy' | 'corporate-leasing'

export const PROPERTIES_CACHE_TAG = 'properties'

// Cached, tag-invalidated reads — these back every public page. Without
// this, every page render (and every parallel worker during `next build`)
// opens its own connection to Neon just to render the footer/listings,
// which is slow and was flaking out with connection timeouts during builds.
// Admin CRUD calls revalidateTag(PROPERTIES_CACHE_TAG, { expire: 0 }) to bust this promptly.
export const getProperties = unstable_cache(
  async (source: PropertySource) => prisma.property.findMany({ where: { source }, orderBy: { createdAt: 'desc' } }),
  ['properties-by-source'],
  { revalidate: 300, tags: [PROPERTIES_CACHE_TAG] }
)

export const getPropertyBySlug = unstable_cache(
  async (source: PropertySource, slug: string) =>
    prisma.property.findUnique({ where: { source_slug: { source, slug } } }),
  ['property-by-slug'],
  { revalidate: 300, tags: [PROPERTIES_CACHE_TAG] }
)

export async function getAllPropertiesAdmin() {
  return prisma.property.findMany({ orderBy: [{ source: 'asc' }, { createdAt: 'desc' }] })
}

export async function getPropertyById(id: string) {
  return prisma.property.findUnique({ where: { id } })
}

interface PropertyInput {
  source: PropertySource
  slug: string
  name: string
  developer?: string | null
  image: string
  city?: string | null
  state?: string | null
  status?: string | null
  priceRange?: string | null
  description?: string | null
  reraCertified?: boolean
  reraNumber?: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details?: any
}

export async function createProperty(input: PropertyInput) {
  const { details, ...rest } = input
  const property = await prisma.property.create({
    data: {
      ...rest,
      details: details ?? {},
    },
  })
  revalidateTag(PROPERTIES_CACHE_TAG, { expire: 0 })
  return property
}

export async function updateProperty(id: string, input: Partial<PropertyInput>) {
  const { details, ...rest } = input
  const property = await prisma.property.update({
    where: { id },
    data: {
      ...rest,
      ...(details !== undefined ? { details } : {}),
    },
  })
  revalidateTag(PROPERTIES_CACHE_TAG, { expire: 0 })
  return property
}

export async function deleteProperty(id: string) {
  const property = await prisma.property.delete({ where: { id } })
  revalidateTag(PROPERTIES_CACHE_TAG, { expire: 0 })
  return property
}

/**
 * Reshapes a DB Property row back into the flat "asset" object shape the
 * existing Buy-property UI components expect (spreads `details` and
 * layers the structured columns on top so edits made via the admin's
 * structured fields always win over stale copies inside `details`).
 */
export function toBuyAsset(property: Property) {
  const details = (property.details as Record<string, unknown>) || {}
  return {
    ...details,
    id: property.slug,
    name: property.name,
    developer: property.developer || '',
    image: property.image,
    location: {
      ...(details.location as object),
      city: property.city,
      state: property.state,
    },
    projectTimeline: {
      ...(details.projectTimeline as object),
      status: property.status,
    },
    pricingAndInventory: {
      ...(details.pricingAndInventory as object),
      priceRange: property.priceRange,
    },
    approvalStatus: {
      ...(details.approvalStatus as object),
      reraCertified: property.reraCertified,
      reraNumber: property.reraNumber,
    },
  }
}

/**
 * Reshapes a DB Property row back into the flat shape the Corporate
 * Leasing card UI expects.
 */
export function toLeasingAsset(property: Property) {
  const details = (property.details as Record<string, unknown>) || {}
  return {
    ...details,
    id: property.slug,
    name: property.name,
    developer: property.developer || '',
    image: property.image,
    location: property.city || (details.location as string) || '',
    status: property.status || '',
    priceRange: property.priceRange || '',
    reraStatus: property.reraCertified
      ? `UP-RERA Certified${property.reraNumber ? ` — ${property.reraNumber}` : ''}`
      : (details.reraStatus as string) || 'Verification in Process',
  }
}
