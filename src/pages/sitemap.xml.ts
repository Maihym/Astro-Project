import type { APIRoute } from 'astro'
import { getAllServices, getAllCities } from '../lib/data'
import { getBusinessInfo } from '../config/business'

export const GET: APIRoute = async () => {
  const businessInfo = getBusinessInfo()
  const services = getAllServices()
  const cities = getAllCities()
  
  const baseUrl = businessInfo.social.website
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/reviews',
    '/services',
    '/cities'
  ]
  
  // Service pages
  const servicePages = services.map(service => `/services/${service.slug}`)
  
  // City pages
  const cityPages = cities.map(city => `/cities/${city.slug}`)
  
  // Service-city combination pages
  const serviceCityPages = services.flatMap(service =>
    cities.map(city => `/services/${service.slug}/${city.slug}`)
  )
  
  // Combine all pages
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...serviceCityPages
  ]
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => {
    const url = `${baseUrl}${page}`
    const priority = page === '' ? '1.0' : 
                    page.includes('/services/') && page.includes('/') ? '0.8' :
                    page.includes('/services/') || page.includes('/cities/') ? '0.9' :
                    '0.7'
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')}
</urlset>`
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
