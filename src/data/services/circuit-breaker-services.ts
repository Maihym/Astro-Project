import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const circuitBreakerServices = {
  id: 'circuit-breaker-services',
  title: 'Circuit Breaker Services',
  slug: 'circuit-breaker-services',
  description: 'Professional circuit breaker installation, replacement, and repair services. Expert troubleshooting for breaker issues and electrical panel upgrades.',
  shortDescription: 'Expert circuit breaker installation, replacement, and repair services.',
  icon: '🔌',
  category: 'electrical-repair',
  features: [
    'Circuit breaker replacement',
    'Circuit breaker installation',
    'Breaker panel upgrades',
    'Main breaker replacement',
    'GFCI breaker installation',
    'AFCI breaker installation',
    'Circuit breaker troubleshooting',
    'Breaker box repairs',
    'Electrical panel replacement',
    'Load center upgrades'
  ],
  benefits: [
    'Improved electrical safety',
    'Prevent electrical fires',
    'Better power distribution',
    'Code compliance',
    'Reduced breaker tripping',
    'Professional warranty'
  ],
  images: [
    '/images/services/circuit-breaker-1.jpg',
    '/images/services/circuit-breaker-2.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '2-4 hours for breaker replacement',
    complexity: 'Intermediate' as const,
    permits: true,
    warranty: '2-year warranty on all breaker work',
    materials: ['Modern circuit breakers', 'GFCI breakers', 'AFCI breakers', 'Safety equipment']
  },
  process: {
    step1: 'Breaker assessment and diagnosis',
    step2: 'Permit acquisition and scheduling',
    step3: 'Professional installation',
    step4: 'Testing and verification'
  },
  localExpertise: {
    commonIssues: [
      'Faulty circuit breakers',
      'Frequent breaker tripping',
      'Outdated breaker panels',
      'Code compliance issues'
    ],
    codeRequirements: 'California Electrical Code compliance for breaker installations',
    permitProcess: 'Building permits required for breaker panel work'
  },
  technicalDetails: {
    voltage: '120V/240V breaker systems',
    amperage: '15A to 200A breaker capacity',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'GFCI/AFCI requirements']
  },
  cta: {
    estimateText: 'Free estimates available for all circuit breaker services',
    contactText: 'Call for personalized pricing based on your breaker needs'
  },
  seo: {
    title: `Circuit Breaker Services | ${companyInfo.name}`,
    description: 'Professional circuit breaker installation, replacement, and repair services. Expert troubleshooting for breaker issues and electrical panel upgrades.',
    keywords: [
      'circuit breaker replacement',
      'breaker keeps tripping',
      'circuit breaker installation',
      'breaker panel replacement',
      'electrical panel upgrade'
    ]
  }
};