import sanitizeHtml from 'sanitize-html'

const MAX_IMAGES = 3

export function sanitizeBlogContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ['p', 'br', 'strong', 'b', 'em', 'i', 'u', 'ul', 'ol', 'li', 'img', 'a', 'div', 'span'],
    allowedAttributes: {
      img: ['src', 'alt', 'style'],
      a: ['href', 'target', 'rel'],
      '*': ['style'],
    },
    allowedStyles: {
      '*': {
        'max-width': [/^100%$/],
        'border-radius': [/^\d+px$/],
        margin: [/^[\d\s]+px(\s\d+px)?$/],
      },
    },
    allowedSchemes: ['https', 'http'],
  })
}

export function extractImageUrls(html: string): string[] {
  const matches = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1])
  return matches.slice(0, MAX_IMAGES)
}

export function countImages(html: string): number {
  return (html.match(/<img[^>]*>/g) || []).length
}

export { MAX_IMAGES }
