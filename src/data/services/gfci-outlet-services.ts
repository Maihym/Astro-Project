import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const gfciOutletServices = {
  id: 'gfci-outlet-services',
  title: 'GFCI Outlet Services',
  slug: 'gfci-outlet-services',
  description: 'Professional GFCI outlet installation, replacement, and repair services. Expert electrical work for bathroom, kitchen, and outdoor outlets.',
  shortDescription: 'Expert GFCI outlet installation, replacement, and repair services.',
  icon: '🛡️',
  category: 'electrical-repair',
  features: [
    'GFCI outlet installation',
    'GFCI outlet replacement',
    'Bathroom GFCI outlets',
    'Kitchen GFCI outlets',
    'Outdoor GFCI outlets',
    'GFCI breaker installation',
    'GFCI outlet troubleshooting',
    'GFCI outlet repair',
    'GFCI outlet testing',
    'Code compliance upgrades'
  ],
  benefits: [
    'Enhanced electrical safety',
    'Protection from electrical shock',
    'Code compliance',
    'Prevent electrical accidents',
    'Professional installation',
    'Reliable protection'
  ],
  images: [
    '/images/services/gfci-outlet-1.jpg',
    '/images/services/gfci-outlet-2.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '1-2 hours per outlet',
    complexity: 'Basic' as const,
    permits: false,
    warranty: '2-year warranty on all GFCI work',
    materials: ['GFCI outlets', 'Safety equipment', 'Code-compliant wiring', 'Testing tools']
  },
  process: {
    step1: 'Outlet assessment and planning',
    step2: 'Power shutoff and safety',
    step3: 'Professional installation',
    step4: 'Testing and verification'
  },
  localExpertise: {
    commonIssues: [
      'Faulty GFCI outlets',
      'Code compliance requirements',
      'Outdoor outlet protection',
      'Bathroom and kitchen safety'
    ],
    codeRequirements: 'California Electrical Code compliance for GFCI installations',
    permitProcess: 'No permits required for GFCI outlet replacement'
  },
  technicalDetails: {
    voltage: '120V GFCI outlets',
    amperage: '15A and 20A GFCI outlets',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'GFCI requirements']
  },
  cta: {
    estimateText: 'Free estimates available for all GFCI outlet services',
    contactText: 'Call for personalized pricing based on your outlet needs'
  },
  seo: {
    title: `GFCI Outlet Services | ${companyInfo.name}`,
    description: 'Professional GFCI outlet installation, replacement, and repair services. Expert electrical work for bathroom, kitchen, and outdoor outlets.',
    keywords: [
      'gfci outlet installation',
      'adding a gfci outlet',
      'change a gfci outlet',
      'gfci outlet replacement',
      'bathroom gfci outlet'
    ]
  }
};