import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const circuitBreakerServices = {
  id: 'circuit-breaker-services',
  title: 'Circuit Breaker Services',
  slug: 'circuit-breaker-services',
  description: 'Professional circuit breaker installation, replacement, and repair services. Expert troubleshooting for breaker issues and electrical panel upgrades.',
  shortDescription: 'Expert circuit breaker installation, replacement, and repair services.',
  icon: '🔌',
  category: 'electrical-repair',
  features: [
    'Circuit breaker replacement',
    'Circuit breaker installation',
    'Breaker panel upgrades',
    'Main breaker replacement',
    'GFCI breaker installation',
    'AFCI breaker installation',
    'Circuit breaker troubleshooting',
    'Breaker box repairs',
    'Electrical panel replacement',
    'Load center upgrades',
    'Breaker tripping diagnosis',
    'Electrical safety inspections'
  ],
  benefits: [
    'Improved electrical safety',
    'Prevent electrical fires',
    'Better power distribution',
    'Code compliance',
    'Reduced breaker tripping',
    'Professional warranty'
  ],
  images: [
    '/images/services/circuit-breaker-1.jpg',
    '/images/services/circuit-breaker-2.jpg'
  ],
  seo: {
    title: `Circuit Breaker Services | ${companyInfo.name}`,
    description: 'Professional circuit breaker installation, replacement, and repair services. Expert troubleshooting for breaker issues and electrical panel upgrades.',
    keywords: ['circuit breaker replacement', 'breaker keeps tripping', 'circuit breaker installation', 'breaker panel replacement', 'electrical panel upgrade']
  }
};
