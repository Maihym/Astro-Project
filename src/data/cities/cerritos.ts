import { getContactInfo, getCompanyInfo } from '../../config/business'

const contactInfo = getContactInfo()
const companyInfo = getCompanyInfo()

export const cerritos = {
  id: 'cerritos',
  name: 'Cerritos',
  slug: 'cerritos',
  state: 'California',
  stateAbbr: 'CA',
  description: 'Comprehensive electrical services in Cerritos, California. Serving the greater Cerritos area with professional electrical solutions.',
  shortDescription: 'Licensed electricians serving Cerritos, California.',
  population: '49,041',
  area: '8.7 sq mi',
  timezone: 'PST',
  coordinates: {
    lat: 33.8583,
    lng: -118.0648
  },
  serviceAreas: [
    'Downtown Cerritos',
    'La Palma',
    'Buena Park',
    'Artesia',
    'La Mirada',
    'Norwalk',
    'Bellflower',
    'Lakewood'
  ],
  localInfo: {
    established: '1956',
    nickname: 'The City of Progress',
    majorIndustries: ['Technology', 'Healthcare', 'Education', 'Retail'],
    notableLandmarks: [
      'Cerritos Center for the Performing Arts',
      'Cerritos Auto Square',
      'Cerritos Regional Park',
      'Cerritos Library'
    ]
  },
  contact: {
    phone: contactInfo.main.phone,
    email: contactInfo.main.email,
    address: contactInfo.main.address.full
  },
  seo: {
    title: `Electrician in Cerritos, California | ${companyInfo.name}`,
    description: 'Professional electrical services in Cerritos, CA. Licensed electricians serving residential and commercial properties throughout Cerritos.',
    keywords: ['electrician cerritos', 'cerritos electrician', 'electrical services cerritos', 'cerritos electrical contractor']
  }
};
