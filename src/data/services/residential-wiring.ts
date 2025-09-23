import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const residentialWiring = {
  id: 'residential-wiring',
  title: 'Residential Wiring',
  slug: 'residential-wiring',
  description: 'Complete residential electrical wiring services for new construction, renovations, and upgrades. We serve La Mirada, Whittier, Cerritos, and surrounding areas with professional electrical solutions.',
  shortDescription: 'Professional residential wiring services for your home.',
  icon: '🏠',
  category: 'residential',
  features: [
    'New home wiring and electrical panel upgrades',
    'Outlet and switch installation',
    'GFCI outlet installation for kitchens and bathrooms',
    'Whole house rewiring for older homes',
    'Smart home wiring and USB outlet installation',
    'Circuit breaker installation and electrical outlet repair',
    'Lighting installation and ceiling fan wiring',
    'Electrical code compliance and permit handling',
    '24/7 emergency support',
    'Licensed and insured electricians'
  ],
  benefits: [
    'Licensed C-10 electrical contractor with full insurance',
    '24/7 emergency service with quick response times',
    'Free estimates and transparent pricing',
    'Local permit handling and code compliance',
    'Experienced with both historic and modern homes',
    'Quality workmanship with warranty protection'
  ],
  images: [
    '/images/services/residential-wiring-la-mirada-1.jpg',
    '/images/services/residential-wiring-whittier-1.jpg',
    '/images/services/residential-wiring-cerritos-1.jpg'
  ],
  seo: {
    title: `Residential Wiring in La Mirada, Whittier & Cerritos | ${companyInfo.name}`,
    description: 'Professional residential wiring services in La Mirada, Whittier, Cerritos, and surrounding areas. Licensed C-10 electrical contractor with 24/7 emergency service. Free estimates available.',
    keywords: [
      'residential wiring la mirada',
      'residential wiring whittier',
      'residential wiring cerritos',
      'home electrical wiring la mirada',
      'house wiring whittier',
      'electrical installation cerritos',
      'electrician la mirada',
      'electrician whittier',
      'electrician cerritos',
      'licensed electrician california',
      'emergency electrician near me',
      'electrical contractor la mirada',
      'electrical services whittier',
      'electrical repair cerritos',
      'C-10 electrical contractor',
      '24/7 emergency electrician',
      'free electrical estimates',
      'electrical panel upgrade la mirada',
      'residential electrician whittier',
      'commercial electrician cerritos'
    ]
  }
};
