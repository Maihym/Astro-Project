import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const emergencyRepairs = {
  id: 'emergency-repairs',
  title: 'Emergency Electrical Repairs',
  slug: 'emergency-repairs',
  description: '24/7 emergency electrical repair services for urgent electrical issues and power outages. We serve La Mirada, Whittier, Cerritos, and surrounding areas with immediate response.',
  shortDescription: '24/7 emergency electrical repair services when you need them most.',
  icon: '🚨',
  category: 'emergency',
  features: [
    '24/7 emergency response',
    'Power outage repairs and electrical fire prevention',
    'Circuit breaker issues and electrical panel problems',
    'Emergency lighting and power restoration services',
    'Electrical safety checks and urgent electrical repairs',
    'Emergency response team with fully stocked service vehicles',
    'Insurance claim assistance for electrical emergencies',
    'After-hours emergency electrical service availability',
    'Licensed and insured electricians',
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
  seo: {
    title: `Emergency Electrical Repairs in La Mirada, Whittier & Cerritos | 24/7 Service | ${companyInfo.name}`,
    description: '24/7 emergency electrical repair services in La Mirada, Whittier, Cerritos, and surrounding areas. Licensed C-10 electrical contractor with 60-minute response time. Free emergency assessments available.',
    keywords: [
      'emergency electrical la mirada',
      'emergency electrical whittier',
      'emergency electrical cerritos',
      '24/7 electrician la mirada',
      'emergency electrician whittier',
      'electrical emergency cerritos',
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
