import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const lightingInstallation = {
  id: 'lighting-installation',
  title: 'Lighting Installation',
  slug: 'lighting-installation',
  description: 'Professional lighting installation and electrical wiring services. Indoor and outdoor lighting solutions for homes and businesses.',
  shortDescription: 'Expert lighting installation and electrical wiring services.',
  icon: '💡',
  category: 'electrical-installation',
  features: [
    'Recessed lighting installation',
    'Chandelier installation',
    'Pendant light installation',
    'Track lighting installation',
    'Outdoor lighting installation',
    'Landscape lighting',
    'Security lighting',
    'LED lighting installation',
    'Smart lighting systems',
    'Lighting fixture replacement',
    'Lighting electrical wiring',
    'Dimmer switch installation'
  ],
  benefits: [
    'Enhanced home aesthetics',
    'Improved energy efficiency',
    'Better lighting control',
    'Increased home value',
    'Professional installation',
    'Code-compliant electrical work'
  ],
  images: [
    '/images/services/lighting-installation-1.jpg',
    '/images/services/lighting-installation-2.jpg'
  ],
  seo: {
    title: `Lighting Installation | ${companyInfo.name}`,
    description: 'Professional lighting installation and electrical wiring services. Indoor and outdoor lighting solutions for homes and businesses.',
    keywords: ['lighting installation', 'recessed lighting', 'chandelier installation', 'outdoor lighting', 'led lighting installation']
  }
};
