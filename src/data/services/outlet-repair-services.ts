import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const outletRepairServices = {
  id: 'outlet-repair-services',
  title: 'Outlet Repair Services',
  slug: 'outlet-repair-services',
  description: 'Professional electrical outlet repair, replacement, and installation services. Expert troubleshooting for outlet issues and electrical problems.',
  shortDescription: 'Expert electrical outlet repair, replacement, and installation services.',
  icon: '🔌',
  category: 'electrical-repair',
  features: [
    'Electrical outlet repair',
    'Outlet replacement',
    'New outlet installation',
    'Outlet troubleshooting',
    'Bathroom outlet repair',
    'Kitchen outlet repair',
    'Outdoor outlet installation',
    'USB outlet installation',
    'Smart outlet installation',
    'Outlet wiring repair',
    'Multiple outlet installation',
    'Outlet safety inspection'
  ],
  benefits: [
    'Restored electrical functionality',
    'Improved electrical safety',
    'Code compliance',
    'Professional installation',
    'Reliable electrical connections',
    'Enhanced convenience'
  ],
  images: [
    '/images/services/outlet-repair-1.jpg',
    '/images/services/outlet-repair-2.jpg'
  ],
  seo: {
    title: `Outlet Repair Services | ${companyInfo.name}`,
    description: 'Professional electrical outlet repair, replacement, and installation services. Expert troubleshooting for outlet issues and electrical problems.',
    keywords: ['outlet repair', 'outlet not working', 'outlet replacement', 'electrical outlet installation', 'outlet troubleshooting']
  }
};
