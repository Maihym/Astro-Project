import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const electricalPanelServices = {
  id: 'electrical-panel-services',
  title: 'Electrical Panel Services',
  slug: 'electrical-panel-services',
  description: 'Professional electrical panel installation, replacement, and upgrade services. Expert electrical panel repairs and load center upgrades.',
  shortDescription: 'Expert electrical panel installation, replacement, and upgrade services.',
  icon: '⚡',
  category: 'electrical-upgrade',
  features: [
    'Electrical panel replacement',
    'Electrical panel upgrades',
    'Load center installation',
    'Main breaker replacement',
    'Panel capacity upgrades',
    'Electrical panel repairs',
    'Circuit breaker panel installation',
    'Sub-panel installation',
    'Electrical panel inspection',
    'Code compliance upgrades'
  ],
  benefits: [
    'Increased electrical capacity',
    'Improved electrical safety',
    'Code compliance',
    'Better power distribution',
    'Reduced electrical issues',
    'Professional installation warranty'
  ],
  images: [
    '/images/services/electrical-panel-1.jpg',
    '/images/services/electrical-panel-2.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '4-8 hours for panel replacement',
    complexity: 'Advanced' as const,
    permits: true,
    warranty: '2-year warranty on all panel work',
    materials: ['Modern electrical panels', 'Circuit breakers', 'Safety equipment', 'Code-compliant wiring']
  },
  process: {
    step1: 'Panel assessment and planning',
    step2: 'Permit acquisition and scheduling',
    step3: 'Professional installation',
    step4: 'Inspection and testing'
  },
  localExpertise: {
    commonIssues: [
      'Outdated electrical panels',
      'Insufficient electrical capacity',
      'Faulty circuit breakers',
      'Code compliance issues'
    ],
    codeRequirements: 'California Electrical Code compliance for panel upgrades',
    permitProcess: 'Building permits required for electrical panel work'
  },
  technicalDetails: {
    voltage: '120V/240V electrical systems',
    amperage: 'Up to 400A panel capacity',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Local building codes']
  },
  cta: {
    estimateText: 'Free estimates available for all electrical panel services',
    contactText: 'Call for personalized pricing based on your panel needs'
  },
  seo: {
    title: `Electrical Panel Services | ${companyInfo.name}`,
    description: 'Professional electrical panel installation, replacement, and upgrade services. Expert electrical panel repairs and load center upgrades.',
    keywords: [
      'electrical panel replacement',
      'change electrical panel',
      'electrical panel upgrade',
      'breaker box replacement',
      'load center installation'
    ]
  }
};