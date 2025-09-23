import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const backupGeneratorInstallation = {
  id: 'backup-generator-installation',
  title: 'Backup Generator Installation',
  slug: 'backup-generator-installation',
  description: 'Professional backup generator installation and electrical connection services. Whole house and portable generator solutions for power outages.',
  shortDescription: 'Expert backup generator installation and electrical connection services.',
  icon: '🔋',
  category: 'backup-power',
  features: [
    'Whole house generator installation',
    'Portable generator connections',
    'Automatic transfer switch installation',
    'Generator electrical panel connection',
    'Standby generator systems',
    'Natural gas generator installation',
    'Propane generator installation',
    'Generator maintenance services',
    'UPS system installation',
    'Battery backup systems',
    'Generator load testing',
    'Emergency power solutions'
  ],
  benefits: [
    'Power outage protection',
    'Automatic power switching',
    'Peace of mind during storms',
    'Protect electronics and appliances',
    'Maintain home security systems',
    'Professional installation warranty'
  ],
  images: [
    '/images/services/backup-generator-1.jpg',
    '/images/services/backup-generator-2.jpg'
  ],
  seo: {
    title: `Backup Generator Installation | ${companyInfo.name}`,
    description: 'Professional backup generator installation and electrical connection services. Whole house and portable generator solutions for power outages.',
    keywords: ['backup generator installation', 'whole house generator', 'automatic transfer switch', 'standby generator', 'generator electrical connection']
  }
};
