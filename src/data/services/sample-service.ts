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
