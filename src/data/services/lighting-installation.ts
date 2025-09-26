import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const lightingInstallation = {
  id: 'lighting-installation',
  title: 'Lighting Installation',
  slug: 'lighting-installation',
  description: 'Professional lighting installation and electrical wiring services. Indoor and outdoor lighting solutions for homes and businesses.',
  shortDescription: 'Expert lighting installation and electrical wiring services.',
  icon: '💡',
  category: 'electrical-installation',
  features: [
    'Recessed lighting installation',
    'Chandelier installation',
    'Pendant light installation',
    'Track lighting installation',
    'Outdoor lighting installation',
    'Landscape lighting',
    'Security lighting',
    'LED lighting installation',
    'Smart lighting systems',
    'Lighting fixture replacement'
  ],
  benefits: [
    'Enhanced home aesthetics',
    'Improved energy efficiency',
    'Better lighting control',
    'Increased home value',
    'Professional installation',
    'Code-compliant electrical work'
  ],
  images: [
    '/images/services/lighting-installation-1.jpg',
    '/images/services/lighting-installation-2.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '2-4 hours per lighting fixture',
    complexity: 'Intermediate' as const,
    permits: false,
    warranty: '2-year warranty on all lighting installations',
    materials: ['LED fixtures', 'Smart lighting', 'Safety equipment', 'Code-compliant wiring']
  },
  process: {
    step1: 'Lighting design and planning',
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
    codeRequirements: 'California Electrical Code compliance for lighting installations',
    permitProcess: 'No permits required for lighting installation'
  },
  technicalDetails: {
    voltage: '120V lighting systems',
    amperage: '15A circuit capacity',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Lighting standards']
  },
  cta: {
    estimateText: 'Free estimates available for all lighting installations',
    contactText: 'Call for personalized pricing based on your lighting needs'
  },
  seo: {
    title: `Lighting Installation | ${companyInfo.name}`,
    description: 'Professional lighting installation and electrical wiring services. Indoor and outdoor lighting solutions for homes and businesses.',
    keywords: [
      'lighting installation',
      'recessed lighting',
      'chandelier installation',
      'outdoor lighting',
      'led lighting installation'
    ]
  }
};