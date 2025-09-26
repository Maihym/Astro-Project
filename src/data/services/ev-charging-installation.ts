import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const evChargingInstallation = {
  id: 'ev-charging-installation',
  title: 'EV Charging Installation',
  slug: 'ev-charging-installation',
  description: 'Professional electric vehicle charging station installation for homes and businesses. Level 1, Level 2, and DC fast charging solutions.',
  shortDescription: 'Expert EV charging station installation for electric vehicles.',
  icon: '⚡',
  category: 'ev-charging',
  features: [
    'Level 1 charging stations (120V)',
    'Level 2 charging stations (240V)',
    'DC fast charging installation',
    'Home charging solutions',
    'Commercial charging stations',
    'Tesla Wall Connector installation',
    'Smart charging systems',
    'Load management systems',
    'Permit handling and code compliance',
    'Electrical panel upgrades for EV charging'
  ],
  benefits: [
    'Faster charging times at home',
    'Increased property value',
    'Energy cost savings',
    'Convenient overnight charging',
    'Future-proof electrical infrastructure',
    'Professional installation and warranty'
  ],
  images: [
    '/images/services/ev-charging-1.jpg',
    '/images/services/ev-charging-2.jpg',
    '/images/services/ev-charging-3.jpg'
  ],
  // Enhanced content fields
  specifications: {
    duration: '2-4 hours for Level 2 installation',
    complexity: 'Intermediate' as const,
    permits: true,
    warranty: '2-year warranty on all EV charging installations',
    materials: ['Level 2 chargers', 'Tesla Wall Connectors', 'Electrical panels', 'Safety equipment']
  },
  process: {
    step1: 'Site assessment and planning',
    step2: 'Permit acquisition and scheduling',
    step3: 'Professional installation',
    step4: 'Testing and certification'
  },
  localExpertise: {
    commonIssues: [
      'Insufficient electrical capacity',
      'Outdated electrical panels',
      'Code compliance requirements',
      'Load management needs'
    ],
    codeRequirements: 'California Electrical Code compliance for EV charging installations',
    permitProcess: 'Building permits required for EV charging station installation'
  },
  technicalDetails: {
    voltage: '240V Level 2 charging systems',
    amperage: 'Up to 80A charging capacity',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'EV charging standards']
  },
  cta: {
    estimateText: 'Free estimates available for all EV charging installations',
    contactText: 'Call for personalized pricing based on your charging needs'
  },
  seo: {
    title: `EV Charging Station Installation | ${companyInfo.name}`,
    description: 'Professional EV charging station installation for electric vehicles. Level 1, Level 2, and DC fast charging solutions for homes and businesses.',
    keywords: [
      'ev charging installation',
      'electric car charger',
      'charging station',
      'tesla wall connector',
      'level 2 charger',
      'ev charger installation'
    ]
  }
};