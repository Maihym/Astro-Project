import { getContactInfo, getCompanyInfo } from '../../config/business'

const contactInfo = getContactInfo()
const companyInfo = getCompanyInfo()

export const laMirada = {
  id: 'la-mirada',
  name: 'La Mirada',
  slug: 'la-mirada',
  state: 'California',
  stateAbbr: 'CA',
  description: 'Professional electrical services in La Mirada, California. Serving residential and commercial properties throughout La Mirada and surrounding areas.',
  shortDescription: 'Licensed electricians serving La Mirada, California.',
  population: '48,008',
  area: '7.8 sq mi',
  timezone: 'PST',
  coordinates: {
    lat: 33.9172,
    lng: -118.0120
  },
  serviceAreas: [
    'Downtown La Mirada',
    'Buena Park',
    'La Habra',
    'Santa Fe Springs',
    'La Palma',
    'Cerritos',
    'Norwalk',
    'Whittier'
  ],
  localInfo: {
    established: '1960',
    nickname: 'The Beautiful View',
    majorIndustries: ['Education', 'Healthcare', 'Manufacturing', 'Retail'],
    notableLandmarks: [
      'Biola University',
      'La Mirada Theatre for the Performing Arts',
      'La Mirada Regional Park',
      'Neff Park'
    ]
  },
  contact: {
    phone: contactInfo.main.phone,
    email: contactInfo.main.email,
    address: contactInfo.main.address.full
  },
  seo: {
    title: `Electrician in La Mirada, California | ${companyInfo.name}`,
    description: 'Professional electrical services in La Mirada, CA. Licensed electricians serving residential and commercial properties throughout La Mirada.',
    keywords: ['electrician la mirada', 'la mirada electrician', 'electrical services la mirada', 'la mirada electrical contractor']
  }
};
