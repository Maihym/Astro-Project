import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const emergencyRepairs = {
  id: 'emergency-repairs',
  title: 'Emergency Electrical Repairs',
  slug: 'emergency-repairs',
  description: '24/7 emergency electrical repair services for urgent electrical issues and power outages. Immediate response with fully stocked service vehicles.',
  shortDescription: '24/7 emergency electrical repair services when you need them most.',
  icon: '🚨',
  category: 'emergency',
  features: [
    '24/7 emergency response',
    'Power outage repairs',
    'Circuit breaker issues',
    'Emergency lighting',
    'Electrical safety checks',
    'Fully stocked service vehicles',
    'Insurance claim assistance',
    'After-hours service',
    'Licensed electricians',
    'Quick response times'
  ],
  benefits: [
    'Licensed C-10 electrical contractor with full insurance',
    '24/7 emergency service with quick response times',
    'Free emergency assessments and transparent pricing',
    'Local permit handling and code compliance',
    'Experienced with all types of electrical emergencies',
    'Fully insured and bonded for your protection'
  ],
  images: [
    '/images/services/emergency-repairs-la-mirada-1.jpg',
    '/images/services/emergency-repairs-whittier-1.jpg',
    '/images/services/emergency-repairs-cerritos-1.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '60 minutes average response time',
    complexity: 'Basic' as const,
    permits: false,
    warranty: '1-year warranty on emergency repairs',
    materials: ['Emergency parts', 'Safety equipment', 'Testing tools']
  },
  process: {
    step1: 'Emergency call received',
    step2: 'Dispatch and en route',
    step3: 'Assessment and repair',
    step4: 'Safety verification'
  },
  localExpertise: {
    commonIssues: [
      'Power outages from storms',
      'Circuit breaker failures',
      'Electrical fires',
      'Faulty wiring emergencies'
    ],
    codeRequirements: 'Emergency electrical safety protocols',
    permitProcess: 'Emergency repairs may not require permits'
  },
  technicalDetails: {
    voltage: '120V/240V emergency systems',
    amperage: 'Up to 200A emergency panels',
    codeCompliance: ['Emergency electrical codes', 'Safety protocols']
  },
  cta: {
    estimateText: 'Free emergency assessments available 24/7',
    contactText: 'Call now for immediate emergency electrical service'
  },
  seo: {
    title: `Emergency Electrical Repairs | 24/7 Service | ${companyInfo.name}`,
    description: '24/7 emergency electrical repair services for urgent electrical issues and power outages. Licensed C-10 electrical contractor with 60-minute response time.',
    keywords: [
      'emergency electrical repairs',
      '24/7 electrician',
      'emergency electrician',
      'electrical emergency',
      'power outage repair',
      'electrical contractor',
      'licensed electrician',
      'emergency electrical service'
    ]
  }
};
