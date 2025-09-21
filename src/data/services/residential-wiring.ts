import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const residentialWiring = {
  id: 'residential-wiring',
  title: 'Residential Wiring',
  slug: 'residential-wiring',
  description: 'Complete residential electrical wiring services for new construction, renovations, and upgrades.',
  shortDescription: 'Professional residential wiring services for your home.',
  icon: '🏠',
  category: 'residential',
  features: [
    'New home wiring',
    'Electrical panel upgrades',
    'Outlet and switch installation',
    'Lighting installation',
    'GFCI outlet installation',
    'Whole house rewiring'
  ],
  benefits: [
    'Improved safety and code compliance',
    'Increased home value',
    'Better energy efficiency',
    'Modern electrical systems'
  ],
  images: [
    '/images/services/residential-wiring-1.jpg',
    '/images/services/residential-wiring-2.jpg'
  ],
  seo: {
    title: `Residential Wiring Services | ${companyInfo.name}`,
    description: 'Professional residential wiring services including new construction, renovations, and electrical upgrades. Licensed electricians serving your area.',
    keywords: ['residential wiring', 'home electrical', 'electrical installation', 'house wiring']
  }
};
