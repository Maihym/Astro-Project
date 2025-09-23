import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const gfciOutletServices = {
  id: 'gfci-outlet-services',
  title: 'GFCI Outlet Services',
  slug: 'gfci-outlet-services',
  description: 'Professional GFCI outlet installation, replacement, and repair services. Expert electrical work for bathroom, kitchen, and outdoor outlets.',
  shortDescription: 'Expert GFCI outlet installation, replacement, and repair services.',
  icon: '🛡️',
  category: 'electrical-repair',
  features: [
    'GFCI outlet installation',
    'GFCI outlet replacement',
    'Bathroom GFCI outlets',
    'Kitchen GFCI outlets',
    'Outdoor GFCI outlets',
    'GFCI breaker installation',
    'GFCI outlet troubleshooting',
    'GFCI outlet repair',
    'GFCI outlet testing',
    'Code compliance upgrades',
    'Whole house GFCI protection',
    'GFCI outlet maintenance'
  ],
  benefits: [
    'Enhanced electrical safety',
    'Protection from electrical shock',
    'Code compliance',
    'Prevent electrical accidents',
    'Professional installation',
    'Reliable protection'
  ],
  images: [
    '/images/services/gfci-outlet-1.jpg',
    '/images/services/gfci-outlet-2.jpg'
  ],
  seo: {
    title: `GFCI Outlet Services | ${companyInfo.name}`,
    description: 'Professional GFCI outlet installation, replacement, and repair services. Expert electrical work for bathroom, kitchen, and outdoor outlets.',
    keywords: ['gfci outlet installation', 'adding a gfci outlet', 'change a gfci outlet', 'gfci outlet replacement', 'bathroom gfci outlet']
  }
};
