import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const ceilingFanInstallation = {
  id: 'ceiling-fan-installation',
  title: 'Ceiling Fan Installation',
  slug: 'ceiling-fan-installation',
  description: 'Professional ceiling fan installation and electrical wiring services. Expert installation of new ceiling fans and replacement of existing units.',
  shortDescription: 'Expert ceiling fan installation and electrical wiring services.',
  icon: '🌀',
  category: 'residential',
  features: [
    'New ceiling fan installation',
    'Ceiling fan replacement',
    'Electrical wiring for ceiling fans',
    'Ceiling fan repair and maintenance',
    'Remote control installation',
    'Smart ceiling fan setup',
    'Ceiling fan with light installation',
    'Vaulted ceiling fan installation',
    'Outdoor ceiling fan installation',
    'Ceiling fan electrical troubleshooting'
  ],
  benefits: [
    'Improved air circulation',
    'Energy-efficient cooling',
    'Enhanced home comfort',
    'Professional installation warranty',
    'Code-compliant electrical work',
    'Safe and secure mounting'
  ],
  images: [
    '/images/services/ceiling-fan-1.jpg',
    '/images/services/ceiling-fan-2.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '2-3 hours per ceiling fan',
    complexity: 'Basic' as const,
    permits: false,
    warranty: '2-year warranty on all ceiling fan installations',
    materials: ['Ceiling fans', 'Mounting hardware', 'Electrical wiring', 'Safety equipment']
  },
  process: {
    step1: 'Ceiling assessment and planning',
    step2: 'Electrical preparation',
    step3: 'Professional installation',
    step4: 'Testing and adjustment'
  },
  localExpertise: {
    commonIssues: [
      'Insufficient electrical capacity',
      'Ceiling structural support',
      'Wiring accessibility',
      'Code compliance requirements'
    ],
    codeRequirements: 'California Electrical Code compliance for ceiling fan installations',
    permitProcess: 'No permits required for ceiling fan installation'
  },
  technicalDetails: {
    voltage: '120V ceiling fan systems',
    amperage: '15A circuit capacity',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Ceiling fan standards']
  },
  cta: {
    estimateText: 'Free estimates available for all ceiling fan installations',
    contactText: 'Call for personalized pricing based on your ceiling fan needs'
  },
  seo: {
    title: `Ceiling Fan Installation | ${companyInfo.name}`,
    description: 'Professional ceiling fan installation and electrical wiring services. Expert installation of new ceiling fans and replacement of existing units.',
    keywords: [
      'ceiling fan installation',
      'ceiling fan electrical wiring',
      'attach ceiling fan',
      'ceiling fan replacement',
      'ceiling fan repair'
    ]
  }
};