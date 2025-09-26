// Enhanced Sample Service for Testing the Local SEO Template
// This demonstrates the enhanced template with local SEO compliance

import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const sampleService = {
  id: 'sample-service',
  title: 'Sample Electrical Service',
  slug: 'sample-service',
  description: 'Professional sample electrical service in La Mirada, Whittier, Cerritos, and surrounding areas. First Electric LLC provides comprehensive sample electrical solutions with 24/7 emergency service availability. Licensed C-10 electrical contractor (License #1120441) serving your local community with safe, code-compliant electrical work.',
  shortDescription: 'Professional sample electrical service in La Mirada, Whittier, Cerritos, and surrounding areas.',
  icon: '⚡',
  category: 'residential',
  features: [
    'Professional sample electrical installation in La Mirada, Whittier, and Cerritos',
    'California electrical code compliance for all local projects',
    'High-quality materials and components for lasting results',
    'Licensed C-10 electricians with local area expertise',
    'Comprehensive warranty coverage on all work performed',
    '24/7 emergency sample electrical support in local areas',
    'Local permit handling and inspection coordination',
    '60-minute emergency response time in service areas'
  ],
  benefits: [
    'Licensed C-10 electrical contractor (License #1120441) serving La Mirada, Whittier, and Cerritos',
    '24/7 emergency service with 60-minute response time in local areas',
    'Free estimates and transparent pricing for all local customers',
    'Local permit handling and California electrical code compliance',
    'Experienced with historic homes in Whittier and modern developments in Cerritos',
    'Fully insured and bonded for your protection and peace of mind'
  ],
  images: [
    '/images/services/sample-service-la-mirada-1.jpg',
    '/images/services/sample-service-whittier-1.jpg',
    '/images/services/sample-service-cerritos-1.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '2-4 hours for standard installation',
    complexity: 'Intermediate' as const,
    permits: true,
    warranty: '2-year warranty on all sample electrical work',
    materials: ['High-quality electrical components', 'Code-compliant wiring', 'Safety equipment', 'Modern fixtures']
  },
  process: {
    step1: 'Initial assessment and planning',
    step2: 'Permit acquisition and scheduling',
    step3: 'Professional installation',
    step4: 'Testing and certification'
  },
  localExpertise: {
    commonIssues: [
      'Outdated electrical systems in older homes',
      'Insufficient electrical capacity',
      'Code compliance requirements',
      'Local permit challenges'
    ],
    codeRequirements: 'California Electrical Code compliance with local permit requirements',
    permitProcess: 'Building permits required for sample electrical work'
  },
  technicalDetails: {
    voltage: '120V/240V electrical systems',
    amperage: '15A to 200A panel capacity',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Local building codes']
  },
  cta: {
    estimateText: 'Free estimates available for all sample electrical projects',
    contactText: 'Call for personalized pricing based on your specific needs'
  },
  seo: {
    title: `Sample Electrical Service in La Mirada, Whittier & Cerritos | ${companyInfo.name}`,
    description: 'Professional sample electrical service in La Mirada, Whittier, Cerritos, and surrounding areas. Licensed C-10 electrical contractor with 24/7 emergency service. Free estimates available.',
    keywords: [
      'sample electrical service la mirada',
      'sample electrical service whittier',
      'sample electrical service cerritos',
      'electrician la mirada',
      'electrician whittier',
      'electrician cerritos',
      'licensed electrician california',
      'emergency electrician near me',
      'electrical contractor la mirada',
      'electrical services whittier',
      'electrical repair cerritos',
      'C-10 electrical contractor',
      '24/7 emergency electrician',
      'free electrical estimates',
      'electrical panel upgrade la mirada',
      'residential electrician whittier',
      'commercial electrician cerritos'
    ]
  }
};
