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
  seo: {
    title: `EV Charging Station Installation | ${companyInfo.name}`,
    description: 'Professional EV charging station installation for electric vehicles. Level 1, Level 2, and DC fast charging solutions for homes and businesses.',
    keywords: ['ev charging installation', 'electric car charger', 'charging station', 'tesla wall connector', 'level 2 charger', 'ev charger installation']
  }
};
