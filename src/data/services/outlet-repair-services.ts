import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const outletRepairServices = {
  id: 'outlet-repair-services',
  title: 'Outlet Repair Services',
  slug: 'outlet-repair-services',
  description: 'Professional electrical outlet repair, replacement, and installation services. Expert troubleshooting for outlet issues and electrical problems.',
  shortDescription: 'Expert electrical outlet repair, replacement, and installation services.',
  icon: '🔌',
  category: 'electrical-repair',
  features: [
    'Electrical outlet repair',
    'Outlet replacement',
    'New outlet installation',
    'Outlet troubleshooting',
    'Bathroom outlet repair',
    'Kitchen outlet repair',
    'Outdoor outlet installation',
    'USB outlet installation',
    'Smart outlet installation',
    'Outlet wiring repair'
  ],
  benefits: [
    'Restored electrical functionality',
    'Improved electrical safety',
    'Code compliance',
    'Professional installation',
    'Reliable electrical connections',
    'Enhanced convenience'
  ],
  images: [
    '/images/services/outlet-repair-1.jpg',
    '/images/services/outlet-repair-2.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '1-2 hours per outlet',
    complexity: 'Basic' as const,
    permits: false,
    warranty: '2-year warranty on all outlet work',
    materials: ['Modern outlets', 'USB outlets', 'Safety equipment', 'Code-compliant wiring']
  },
  process: {
    step1: 'Outlet assessment and diagnosis',
    step2: 'Power shutoff and safety',
    step3: 'Professional installation',
    step4: 'Testing and verification'
  },
  localExpertise: {
    commonIssues: [
      'Faulty electrical outlets',
      'Loose outlet connections',
      'Code compliance requirements',
      'Outdoor outlet protection'
    ],
    codeRequirements: 'California Electrical Code compliance for outlet installations',
    permitProcess: 'No permits required for outlet replacement'
  },
  technicalDetails: {
    voltage: '120V electrical outlets',
    amperage: '15A and 20A outlets',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Outlet standards']
  },
  cta: {
    estimateText: 'Free estimates available for all outlet repair services',
    contactText: 'Call for personalized pricing based on your outlet needs'
  },
  seo: {
    title: `Outlet Repair Services | ${companyInfo.name}`,
    description: 'Professional electrical outlet repair, replacement, and installation services. Expert troubleshooting for outlet issues and electrical problems.',
    keywords: [
      'outlet repair',
      'outlet not working',
      'outlet replacement',
      'electrical outlet installation',
      'outlet troubleshooting'
    ]
  }
};