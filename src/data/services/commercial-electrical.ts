import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const commercialElectrical = {
  id: 'commercial-electrical',
  title: 'Commercial Electrical',
  slug: 'commercial-electrical',
  description: 'Comprehensive commercial electrical services for businesses, offices, and industrial facilities.',
  shortDescription: 'Professional commercial electrical solutions for your business.',
  icon: '🏢',
  category: 'commercial',
  features: [
    'Office building wiring',
    'Retail space electrical',
    'Industrial electrical systems',
    'Emergency lighting systems',
    'Power distribution panels',
    'Electrical maintenance contracts'
  ],
  benefits: [
    'Code compliance for commercial spaces',
    'Minimized business downtime',
    'Energy-efficient solutions',
    '24/7 emergency support'
  ],
  images: [
    '/images/services/commercial-electrical-1.jpg',
    '/images/services/commercial-electrical-2.jpg'
  ],
  seo: {
    title: `Commercial Electrical Services | ${companyInfo.name}`,
    description: 'Professional commercial electrical services for businesses and industrial facilities. Licensed electricians with commercial expertise.',
    keywords: ['commercial electrical', 'business electrical', 'office wiring', 'industrial electrical']
  }
};
