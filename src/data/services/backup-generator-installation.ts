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
    'Battery backup systems'
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
  // Enhanced content fields
  specifications: {
    duration: '1-2 days for whole house generators',
    complexity: 'Advanced' as const,
    permits: true,
    warranty: '2-year warranty on all generator installations',
    materials: ['Generators', 'Transfer switches', 'Electrical panels', 'Safety equipment']
  },
  process: {
    step1: 'Generator sizing and planning',
    step2: 'Permit acquisition and scheduling',
    step3: 'Professional installation',
    step4: 'Testing and certification'
  },
  localExpertise: {
    commonIssues: [
      'Insufficient electrical capacity',
      'Transfer switch requirements',
      'Code compliance needs',
      'Fuel source connections'
    ],
    codeRequirements: 'California Electrical Code compliance for generator installations',
    permitProcess: 'Building permits required for generator installations'
  },
  technicalDetails: {
    voltage: '120V/240V generator systems',
    amperage: 'Up to 200A generator capacity',
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Generator standards']
  },
  cta: {
    estimateText: 'Free estimates available for all backup generator installations',
    contactText: 'Call for personalized pricing based on your generator needs'
  },
  seo: {
    title: `Backup Generator Installation | ${companyInfo.name}`,
    description: 'Professional backup generator installation and electrical connection services. Whole house and portable generator solutions for power outages.',
    keywords: [
      'backup generator installation',
      'whole house generator',
      'automatic transfer switch',
      'standby generator',
      'generator electrical connection'
    ]
  }
};