import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.mpdrealteck.in'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/mpd-88', '/account', '/login', '/forgot-password', '/shortlist', '/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
