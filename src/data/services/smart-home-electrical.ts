import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const smartHomeElectrical = {
  id: 'smart-home-electrical',
  title: 'Smart Home Electrical',
  slug: 'smart-home-electrical',
  description: 'Professional smart home electrical installation and automation services. Smart switches, outlets, and home automation systems.',
  shortDescription: 'Expert smart home electrical installation and automation services.',
  icon: '🏠',
  category: 'smart-home',
  features: [
    'Smart switch installation',
    'Smart outlet installation',
    'Smart lighting systems',
    'Home automation wiring',
    'Smart thermostat installation',
    'Smart doorbell wiring',
    'Security system wiring',
    'Smart home hub installation',
    'WiFi electrical devices',
    'Smart home network setup',
    'Voice control integration',
    'Smart home troubleshooting'
  ],
  benefits: [
    'Enhanced home automation',
    'Energy efficiency',
    'Remote control capabilities',
    'Increased home value',
    'Modern living experience',
    'Professional installation'
  ],
  images: [
    '/images/services/smart-home-1.jpg',
    '/images/services/smart-home-2.jpg'
  ],
  seo: {
    title: `Smart Home Electrical | ${companyInfo.name}`,
    description: 'Professional smart home electrical installation and automation services. Smart switches, outlets, and home automation systems.',
    keywords: ['smart home electrical', 'smart switch installation', 'home automation', 'smart outlet installation', 'smart lighting systems']
  }
};
