import { getContactInfo, getCompanyInfo } from '../../config/business'

const contactInfo = getContactInfo()
const companyInfo = getCompanyInfo()

export const whittier = {
  id: 'whittier',
  name: 'Whittier',
  slug: 'whittier',
  state: 'California',
  stateAbbr: 'CA',
  description: 'Reliable electrical services in Whittier, California. Professional electricians serving Whittier and the surrounding Los Angeles County area.',
  shortDescription: 'Licensed electricians serving Whittier, California.',
  population: '87,306',
  area: '14.7 sq mi',
  timezone: 'PST',
  coordinates: {
    lat: 33.9785,
    lng: -118.0328
  },
  serviceAreas: [
    'Downtown Whittier',
    'Uptown Whittier',
    'La Mirada',
    'Santa Fe Springs',
    'Pico Rivera',
    'Montebello',
    'La Habra',
    'Hacienda Heights'
  ],
  localInfo: {
    established: '1898',
    nickname: 'The Friendly City',
    majorIndustries: ['Education', 'Healthcare', 'Manufacturing', 'Government'],
    notableLandmarks: [
      'Whittier College',
      'Whittier Narrows Recreation Area',
      'Pio Pico State Historic Park',
      'Whittier Museum'
    ]
  },
  contact: {
    phone: contactInfo.main.phone,
    email: contactInfo.main.email,
    address: contactInfo.main.address.full
  },
  seo: {
    title: `Electrician in Whittier, California | ${companyInfo.name}`,
    description: 'Professional electrical services in Whittier, CA. Licensed electricians serving residential and commercial properties throughout Whittier.',
    keywords: ['electrician whittier', 'whittier electrician', 'electrical services whittier', 'whittier electrical contractor']
  }
};
