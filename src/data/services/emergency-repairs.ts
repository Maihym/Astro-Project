import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const emergencyRepairs = {
  id: 'emergency-repairs',
  title: 'Emergency Electrical Repairs',
  slug: 'emergency-repairs',
  description: '24/7 emergency electrical repair services for urgent electrical issues and power outages.',
  shortDescription: '24/7 emergency electrical repair services when you need them most.',
  icon: '🚨',
  category: 'emergency',
  features: [
    '24/7 emergency response',
    'Power outage repairs',
    'Electrical fire prevention',
    'Circuit breaker issues',
    'Faulty wiring repairs',
    'Electrical safety inspections'
  ],
  benefits: [
    'Immediate response to emergencies',
    'Prevent electrical fires',
    'Restore power quickly',
    'Safety-first approach'
  ],
  images: [
    '/images/services/emergency-repairs-1.jpg',
    '/images/services/emergency-repairs-2.jpg'
  ],
  seo: {
    title: `Emergency Electrical Repairs | 24/7 Service | ${companyInfo.name}`,
    description: '24/7 emergency electrical repair services. Fast response to power outages, electrical fires, and urgent electrical issues.',
    keywords: ['emergency electrical', '24/7 electrician', 'power outage repair', 'electrical emergency']
  }
};
