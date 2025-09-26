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
    'Smart home network setup'
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
  // Enhanced content fields
  specifications: {
    duration: '4-8 hours for smart home setup',
    complexity: 'Advanced' as const,
    permits: false,
    warranty: '2-year warranty on all smart home installations',
    materials: ['Smart switches', 'Smart outlets', 'Automation systems', 'Network equipment']
  },
  process: {
    step1: 'Smart home planning and design',
    step2: 'Network and electrical preparation',
    step3: 'Professional installation',
    step4: 'Testing and configuration'
  },
  localExpertise: {
    commonIssues: [
      'Network connectivity issues',
      'Electrical capacity requirements',
      'Code compliance needs',
      'Integration challenges'
    ],
    codeRequirements: 'California Electrical Code compliance for smart home installations',
    permitProcess: 'No permits required for smart home installations'
  },
  technicalDetails: {
    voltage: '120V smart home systems',
    amperage: '15A and 20A circuits',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Smart home standards']
  },
  cta: {
    estimateText: 'Free estimates available for all smart home electrical services',
    contactText: 'Call for personalized pricing based on your smart home needs'
  },
  seo: {
    title: `Smart Home Electrical | ${companyInfo.name}`,
    description: 'Professional smart home electrical installation and automation services. Smart switches, outlets, and home automation systems.',
    keywords: [
      'smart home electrical',
      'smart switch installation',
      'home automation',
      'smart outlet installation',
      'smart lighting systems'
    ]
  }
};