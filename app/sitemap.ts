import type { MetadataRoute } from 'next'
import { getProperties } from '@/lib/properties'
import { getPublishedPosts } from '@/lib/blogData'

const SITE_URL = 'https://www.mpdrealteck.in'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [buyProperties, posts] = await Promise.all([
    getProperties('buy'),
    getPublishedPosts(),
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/buy`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/corporate-leasing`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/invest`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/due-diligence`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/consulting`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/construction`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/interior-design`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/corporate-real-estate`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const propertyRoutes: MetadataRoute.Sitemap = buyProperties.map((property) => ({
    url: `${SITE_URL}/buy/${property.slug}`,
    lastModified: property.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const insightRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/invest/insights/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...propertyRoutes, ...insightRoutes]
}
