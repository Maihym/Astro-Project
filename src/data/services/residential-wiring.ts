import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const residentialWiring = {
  id: 'residential-wiring',
  title: 'Residential Wiring',
  slug: 'residential-wiring',
  description: 'Complete residential electrical wiring services for new construction, renovations, and upgrades. Professional installation with full code compliance and warranty protection.',
  shortDescription: 'Professional residential wiring services for your home.',
  icon: '🏠',
  category: 'residential',
  features: [
    'New home electrical systems',
    'Outlet and switch installation',
    'GFCI outlet installation',
    'Whole house rewiring',
    'Smart home wiring',
    'Circuit breaker installation',
    'Lighting installation',
    'Code compliance and permits',
    'Emergency support',
    'Licensed electricians'
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
  // Enhanced content fields
  specifications: {
    duration: '1-3 days for full rewiring',
    complexity: 'Intermediate' as const,
    permits: true,
    warranty: '2-year warranty on all work',
    materials: ['Copper wiring', 'GFCI outlets', 'Circuit breakers', 'Electrical panels']
  },
  process: {
    step1: 'Initial assessment and planning',
    step2: 'Permit acquisition and scheduling',
    step3: 'Professional installation',
    step4: 'Inspection and testing'
  },
  localExpertise: {
    commonIssues: [
      'Knob and tube wiring in older homes',
      'Insufficient electrical capacity',
      'Outdated electrical panels',
      'Aluminum wiring concerns'
    ],
    codeRequirements: 'California Electrical Code compliance with local permit requirements',
    permitProcess: 'Building permits required for major electrical work'
  },
  technicalDetails: {
    voltage: '120V/240V systems',
    amperage: '15A to 200A panels',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Local building codes']
  },
  cta: {
    estimateText: 'Free estimates available for all residential wiring projects',
    contactText: 'Call for personalized pricing based on your specific needs'
  },
  seo: {
    title: `Residential Wiring Services | ${companyInfo.name}`,
    description: 'Professional residential wiring services for new construction, renovations, and upgrades. Licensed electricians with full code compliance.',
    keywords: [
      'residential wiring',
      'home electrical wiring',
      'house wiring',
      'electrical installation',
      'electrical contractor',
      'licensed electrician',
      'electrical panel upgrade',
      'whole house rewiring'
    ]
  }
};
