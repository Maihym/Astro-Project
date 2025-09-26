import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const electricalInspection = {
  id: 'electrical-inspection',
  title: 'Electrical Inspection',
  slug: 'electrical-inspection',
  description: 'Professional electrical safety inspections and code compliance assessments. Comprehensive electrical system evaluations for homes and businesses.',
  shortDescription: 'Expert electrical safety inspections and code compliance assessments.',
  icon: '🔍',
  category: 'electrical-safety',
  features: [
    'Electrical safety inspections',
    'Code compliance assessments',
    'Electrical system evaluations',
    'Home inspection electrical',
    'Commercial electrical inspection',
    'Electrical hazard identification',
    'Electrical maintenance planning',
    'Safety code violations',
    'Electrical system documentation',
    'Pre-purchase electrical inspection'
  ],
  benefits: [
    'Enhanced electrical safety',
    'Code compliance assurance',
    'Prevent electrical hazards',
    'Insurance compliance',
    'Peace of mind',
    'Professional assessment'
  ],
  images: [
    '/images/services/electrical-inspection-1.jpg',
    '/images/services/electrical-inspection-2.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '2-4 hours for comprehensive inspection',
    complexity: 'Intermediate' as const,
    permits: false,
    warranty: 'Inspection report warranty',
    materials: ['Testing equipment', 'Safety tools', 'Documentation', 'Code references']
  },
  process: {
    step1: 'Inspection planning and scheduling',
    step2: 'Comprehensive system evaluation',
    step3: 'Safety and code assessment',
    step4: 'Detailed report and recommendations'
  },
  localExpertise: {
    commonIssues: [
      'Code compliance violations',
      'Electrical safety hazards',
      'Outdated electrical systems',
      'Insufficient electrical capacity'
    ],
    codeRequirements: 'California Electrical Code compliance assessment',
    permitProcess: 'No permits required for electrical inspections'
  },
  technicalDetails: {
    voltage: '120V/240V electrical systems',
    amperage: 'Up to 400A panel capacity',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Local building codes']
  },
  cta: {
    estimateText: 'Free estimates available for all electrical inspections',
    contactText: 'Call for personalized pricing based on your inspection needs'
  },
  seo: {
    title: `Electrical Inspection | ${companyInfo.name}`,
    description: 'Professional electrical safety inspections and code compliance assessments. Comprehensive electrical system evaluations for homes and businesses.',
    keywords: [
      'electrical inspection',
      'electrical safety inspection',
      'code compliance',
      'electrical system evaluation',
      'home electrical inspection'
    ]
  }
};