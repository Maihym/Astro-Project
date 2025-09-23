import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const commercialElectrical = {
  id: 'commercial-electrical',
  title: 'Commercial Electrical',
  slug: 'commercial-electrical',
  description: 'Professional commercial electrical services for businesses, offices, and industrial facilities. We serve La Mirada, Whittier, Cerritos, and surrounding areas with comprehensive electrical solutions.',
  shortDescription: 'Professional commercial electrical services for your business.',
  icon: '🏢',
  category: 'commercial',
  features: [
    'Office building wiring and retail space electrical systems',
    'Industrial electrical systems and power distribution',
    'Electrical panel upgrades for commercial properties',
    'Lighting systems and emergency lighting installation',
    'Fire alarm systems and security system wiring',
    'Data center electrical and electrical maintenance services',
    'Electrical code compliance and permit handling',
    '24/7 emergency support',
    'Licensed and insured electricians',
    'Commercial project management'
  ],
  benefits: [
    'Licensed C-10 electrical contractor with full insurance',
    '24/7 emergency service with quick response times',
    'Free estimates and transparent pricing',
    'Local permit handling and code compliance',
    'Experienced with businesses of all sizes',
    'Quality workmanship with warranty protection'
  ],
  images: [
    '/images/services/commercial-electrical-la-mirada-1.jpg',
    '/images/services/commercial-electrical-whittier-1.jpg',
    '/images/services/commercial-electrical-cerritos-1.jpg'
  ],
  seo: {
    title: `Commercial Electrical in La Mirada, Whittier & Cerritos | ${companyInfo.name}`,
    description: 'Professional commercial electrical services in La Mirada, Whittier, Cerritos, and surrounding areas. Licensed C-10 electrical contractor with 24/7 emergency service. Free estimates available.',
    keywords: [
      'commercial electrical la mirada',
      'commercial electrical whittier',
      'commercial electrical cerritos',
      'business electrical la mirada',
      'office electrical whittier',
      'industrial electrical cerritos',
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
