import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.note.co.tz/sitemap.xml',
    host: 'https://www.note.co.tz',
  }
}
