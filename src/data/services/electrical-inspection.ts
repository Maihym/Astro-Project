import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const electricalInspection = {
  id: 'electrical-inspection',
  title: 'Electrical Inspection',
  slug: 'electrical-inspection',
  description: 'Professional electrical safety inspections and code compliance assessments. Comprehensive electrical system evaluations for homes and businesses.',
  shortDescription: 'Expert electrical safety inspections and code compliance assessments.',
  icon: '🔍',
  category: 'electrical-safety',
  features: [
    'Electrical safety inspections',
    'Code compliance assessments',
    'Electrical system evaluations',
    'Home inspection electrical',
    'Commercial electrical inspection',
    'Electrical hazard identification',
    'Electrical maintenance planning',
    'Safety code violations',
    'Electrical system documentation',
    'Pre-purchase electrical inspection',
    'Insurance electrical inspection',
    'Electrical permit inspection'
  ],
  benefits: [
    'Enhanced electrical safety',
    'Code compliance assurance',
    'Prevent electrical hazards',
    'Insurance compliance',
    'Peace of mind',
    'Professional assessment'
  ],
  images: [
    '/images/services/electrical-inspection-1.jpg',
    '/images/services/electrical-inspection-2.jpg'
  ],
  seo: {
    title: `Electrical Inspection | ${companyInfo.name}`,
    description: 'Professional electrical safety inspections and code compliance assessments. Comprehensive electrical system evaluations for homes and businesses.',
    keywords: ['electrical inspection', 'electrical safety inspection', 'code compliance', 'electrical system evaluation', 'home electrical inspection']
  }
};
