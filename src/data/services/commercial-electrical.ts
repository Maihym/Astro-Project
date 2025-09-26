import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const commercialElectrical = {
  id: 'commercial-electrical',
  title: 'Commercial Electrical',
  slug: 'commercial-electrical',
  description: 'Professional commercial electrical services for businesses, offices, and industrial facilities. Comprehensive electrical solutions with full code compliance and warranty protection.',
  shortDescription: 'Professional commercial electrical services for your business.',
  icon: '🏢',
  category: 'commercial',
  features: [
    'Office building wiring',
    'Retail space electrical systems',
    'Industrial electrical systems',
    'Electrical panel upgrades',
    'Lighting systems installation',
    'Fire alarm systems',
    'Security system wiring',
    'Data center electrical',
    'Code compliance and permits',
    'Emergency support'
  ],
  benefits: [
    'Licensed C-10 electrical contractor with full insurance',
    '24/7 emergency service with quick response times',
    'Free estimates and transparent pricing',
    'Local permit handling and code compliance',
    'Experienced with businesses of all sizes',
    'Quality workmanship with warranty protection'
  ],
  images: [
    '/images/services/commercial-electrical-la-mirada-1.jpg',
    '/images/services/commercial-electrical-whittier-1.jpg',
    '/images/services/commercial-electrical-cerritos-1.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '1-5 days depending on project size',
    complexity: 'Advanced' as const,
    permits: true,
    warranty: '2-year warranty on all commercial work',
    materials: ['Commercial-grade wiring', 'Industrial panels', 'Emergency lighting', 'Fire safety systems']
  },
  process: {
    step1: 'Project assessment and planning',
    step2: 'Permit acquisition and scheduling',
    step3: 'Professional installation',
    step4: 'Testing and certification'
  },
  localExpertise: {
    commonIssues: [
      'Outdated commercial electrical systems',
      'Insufficient power capacity',
      'Code compliance issues',
      'Emergency lighting failures'
    ],
    codeRequirements: 'California Commercial Electrical Code compliance with local permit requirements',
    permitProcess: 'Commercial permits required for most electrical work'
  },
  technicalDetails: {
    voltage: '120V/240V/480V commercial systems',
    amperage: 'Up to 1000A commercial panels',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Local commercial codes']
  },
  cta: {
    estimateText: 'Free estimates available for all commercial electrical projects',
    contactText: 'Call for personalized pricing based on your business needs'
  },
  seo: {
    title: `Commercial Electrical Services | ${companyInfo.name}`,
    description: 'Professional commercial electrical services for businesses, offices, and industrial facilities. Licensed electricians with full code compliance.',
    keywords: [
      'commercial electrical',
      'business electrical',
      'office electrical',
      'industrial electrical',
      'electrical contractor',
      'licensed electrician',
      'commercial electrical contractor',
      'business electrical services'
    ]
  }
};