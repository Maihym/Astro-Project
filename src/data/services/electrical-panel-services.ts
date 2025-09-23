import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const electricalPanelServices = {
  id: 'electrical-panel-services',
  title: 'Electrical Panel Services',
  slug: 'electrical-panel-services',
  description: 'Professional electrical panel installation, replacement, and upgrade services. Expert electrical panel repairs and load center upgrades.',
  shortDescription: 'Expert electrical panel installation, replacement, and upgrade services.',
  icon: '⚡',
  category: 'electrical-upgrade',
  features: [
    'Electrical panel replacement',
    'Electrical panel upgrades',
    'Load center installation',
    'Main breaker replacement',
    'Panel capacity upgrades',
    'Electrical panel repairs',
    'Circuit breaker panel installation',
    'Sub-panel installation',
    'Electrical panel inspection',
    'Code compliance upgrades',
    'Panel wiring repairs',
    'Electrical panel maintenance'
  ],
  benefits: [
    'Increased electrical capacity',
    'Improved electrical safety',
    'Code compliance',
    'Better power distribution',
    'Reduced electrical issues',
    'Professional installation warranty'
  ],
  images: [
    '/images/services/electrical-panel-1.jpg',
    '/images/services/electrical-panel-2.jpg'
  ],
  seo: {
    title: `Electrical Panel Services | ${companyInfo.name}`,
    description: 'Professional electrical panel installation, replacement, and upgrade services. Expert electrical panel repairs and load center upgrades.',
    keywords: ['electrical panel replacement', 'change electrical panel', 'electrical panel upgrade', 'breaker box replacement', 'load center installation']
  }
};
