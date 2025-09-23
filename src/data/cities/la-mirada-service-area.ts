import { getContactInfo, getCompanyInfo } from '../../config/business'

const contactInfo = getContactInfo()
const companyInfo = getCompanyInfo()

export interface ServiceAreaCity {
  id: string
  name: string
  slug: string
  zipCodes: string[]
  population: number
  distance: number // miles from La Mirada
  county: string
  areaCodes: string[]
  coordinates: {
    lat: number
    lng: number
  }
  notableLandmarks?: string[]
  established?: string
  nickname?: string
}

export const laMiradaServiceArea: ServiceAreaCity[] = [
  // Within 3 miles
  {
    id: 'la-palma',
    name: 'La Palma',
    slug: 'la-palma',
    zipCodes: ['90623'],
    population: 14220,
    distance: 2.5,
    county: 'Orange County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.85, lng: -118.04 },
    notableLandmarks: ['La Palma Central Park'],
    established: '1955',
    nickname: 'The City of Friendly Neighbors'
  },
  {
    id: 'la-habra',
    name: 'La Habra',
    slug: 'la-habra',
    zipCodes: ['90631'],
    population: 61260,
    distance: 2.8,
    county: 'Orange County',
    areaCodes: ['562', '626', '657', '714'],
    coordinates: { lat: 33.94, lng: -117.95 },
    notableLandmarks: ['La Habra Children\'s Museum'],
    established: '1925',
    nickname: 'The Friendly City'
  },
  {
    id: 'santa-fe-springs',
    name: 'Santa Fe Springs',
    slug: 'santa-fe-springs',
    zipCodes: ['90670'],
    population: 14800,
    distance: 2.2,
    county: 'Los Angeles County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.92, lng: -118.06 },
    notableLandmarks: ['Santa Fe Springs Nature Center'],
    established: '1957',
    nickname: 'The Industrial City'
  },

  // 3-5 miles
  {
    id: 'whittier',
    name: 'Whittier',
    slug: 'whittier',
    zipCodes: ['90601', '90602', '90603', '90604', '90605', '90606'],
    population: 87306,
    distance: 4.2,
    county: 'Los Angeles County',
    areaCodes: ['562', '626'],
    coordinates: { lat: 33.9785, lng: -118.0328 },
    notableLandmarks: ['Whittier College', 'Whittier Narrows Recreation Area'],
    established: '1898',
    nickname: 'The Friendly City'
  },
  {
    id: 'buena-park',
    name: 'Buena Park',
    slug: 'buena-park',
    zipCodes: ['90620', '90621'],
    population: 73200,
    distance: 3.8,
    county: 'Orange County',
    areaCodes: ['657', '714'],
    coordinates: { lat: 33.855, lng: -117.995 },
    notableLandmarks: ['Knott\'s Berry Farm', 'Medieval Times'],
    established: '1953',
    nickname: 'The Entertainment Capital'
  },
  {
    id: 'cerritos',
    name: 'Cerritos',
    slug: 'cerritos',
    zipCodes: ['90703'],
    population: 46020,
    distance: 3.5,
    county: 'Los Angeles County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.8583, lng: -118.0648 },
    notableLandmarks: ['Cerritos Center for the Performing Arts', 'Cerritos Auto Square'],
    established: '1956',
    nickname: 'The City of Progress'
  },
  {
    id: 'downey',
    name: 'Downey',
    slug: 'downey',
    zipCodes: ['90240', '90241', '90242'],
    population: 114210,
    distance: 3.2,
    county: 'Los Angeles County',
    areaCodes: ['562'],
    coordinates: { lat: 33.94, lng: -118.13 },
    notableLandmarks: ['Columbia Memorial Space Center'],
    established: '1873',
    nickname: 'The City of Champions'
  },
  {
    id: 'cypress',
    name: 'Cypress',
    slug: 'cypress',
    zipCodes: ['90630'],
    population: 45940,
    distance: 4.5,
    county: 'Orange County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.81, lng: -118.03 },
    notableLandmarks: ['Cypress College'],
    established: '1956',
    nickname: 'The City of Progress'
  },
  {
    id: 'placentia',
    name: 'Placentia',
    slug: 'placentia',
    zipCodes: ['92870'],
    population: 47770,
    distance: 4.8,
    county: 'Orange County',
    areaCodes: ['657', '714'],
    coordinates: { lat: 33.88, lng: -117.85 },
    notableLandmarks: ['Placentia Heritage Festival'],
    established: '1926',
    nickname: 'The Friendly City'
  },

  // 5-7 miles
  {
    id: 'norwalk',
    name: 'Norwalk',
    slug: 'norwalk',
    zipCodes: ['90650'],
    population: 89180,
    distance: 5.2,
    county: 'Los Angeles County',
    areaCodes: ['562'],
    coordinates: { lat: 33.9, lng: -118.07 },
    notableLandmarks: ['Norwalk Arts & Sports Complex'],
    established: '1957',
    nickname: 'The Friendly City'
  },
  {
    id: 'pico-rivera',
    name: 'Pico Rivera',
    slug: 'pico-rivera',
    zipCodes: ['90660'],
    population: 53110,
    distance: 5.8,
    county: 'Los Angeles County',
    areaCodes: ['213', '323', '562', '626'],
    coordinates: { lat: 33.99, lng: -118.09 },
    notableLandmarks: ['Pico Rivera Sports Arena'],
    established: '1958',
    nickname: 'The City of Progress'
  },
  {
    id: 'bellflower',
    name: 'Bellflower',
    slug: 'bellflower',
    zipCodes: ['90706'],
    population: 65410,
    distance: 5.5,
    county: 'Los Angeles County',
    areaCodes: ['562'],
    coordinates: { lat: 33.88, lng: -118.13 },
    notableLandmarks: ['Simms Park'],
    established: '1957',
    nickname: 'The Friendly City'
  },
  {
    id: 'lakewood',
    name: 'Lakewood',
    slug: 'lakewood',
    zipCodes: ['90712', '90713', '90715'],
    population: 73110,
    distance: 6.2,
    county: 'Los Angeles County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.85, lng: -118.11 },
    notableLandmarks: ['Lakewood Center Mall'],
    established: '1954',
    nickname: 'The City of Progress'
  },
  {
    id: 'hawaiian-gardens',
    name: 'Hawaiian Gardens',
    slug: 'hawaiian-gardens',
    zipCodes: ['90716'],
    population: 11540,
    distance: 6.5,
    county: 'Los Angeles County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.83, lng: -118.07 },
    notableLandmarks: ['Hawaiian Gardens Casino'],
    established: '1964',
    nickname: 'The Friendly City'
  },
  {
    id: 'fullerton',
    name: 'Fullerton',
    slug: 'fullerton',
    zipCodes: ['92831', '92832', '92833', '92835'],
    population: 135560,
    distance: 5.8,
    county: 'Orange County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.87, lng: -117.92 },
    notableLandmarks: ['California State University Fullerton'],
    established: '1887',
    nickname: 'The Friendly City'
  },
  {
    id: 'hacienda-heights',
    name: 'Hacienda Heights',
    slug: 'hacienda-heights',
    zipCodes: ['91745'],
    population: 48070,
    distance: 6.1,
    county: 'Los Angeles County',
    areaCodes: ['562', '626'],
    coordinates: { lat: 34.0, lng: -117.97 },
    notableLandmarks: ['Hsi Lai Temple'],
    established: '1961',
    nickname: 'The Friendly City'
  },
  {
    id: 'la-puente',
    name: 'La Puente',
    slug: 'la-puente',
    zipCodes: ['91744', '91746'],
    population: 97440,
    distance: 6.8,
    county: 'Los Angeles County',
    areaCodes: ['562', '626'],
    coordinates: { lat: 34.03, lng: -117.95 },
    notableLandmarks: ['La Puente High School'],
    established: '1956',
    nickname: 'The Friendly City'
  },

  // 7-10 miles
  {
    id: 'montebello',
    name: 'Montebello',
    slug: 'montebello',
    zipCodes: ['90640'],
    population: 52040,
    distance: 7.2,
    county: 'Los Angeles County',
    areaCodes: ['213', '323', '562', '626'],
    coordinates: { lat: 34.02, lng: -118.11 },
    notableLandmarks: ['Montebello Town Center'],
    established: '1920',
    nickname: 'The Friendly City'
  },
  {
    id: 'bell-gardens',
    name: 'Bell Gardens',
    slug: 'bell-gardens',
    zipCodes: ['90201'],
    population: 79080,
    distance: 7.8,
    county: 'Los Angeles County',
    areaCodes: ['213', '323', '562'],
    coordinates: { lat: 33.97, lng: -118.15 },
    notableLandmarks: ['Bicycle Casino'],
    established: '1961',
    nickname: 'The Friendly City'
  },
  {
    id: 'paramount',
    name: 'Paramount',
    slug: 'paramount',
    zipCodes: ['90723'],
    population: 45920,
    distance: 8.1,
    county: 'Los Angeles County',
    areaCodes: ['310', '424', '562'],
    coordinates: { lat: 33.89, lng: -118.16 },
    notableLandmarks: ['Paramount High School'],
    established: '1957',
    nickname: 'The Friendly City'
  },
  {
    id: 'long-beach-partial',
    name: 'Long Beach (Partial)',
    slug: 'long-beach-partial',
    zipCodes: ['90808'],
    population: 36840,
    distance: 8.5,
    county: 'Los Angeles County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.82, lng: -118.11 },
    notableLandmarks: ['Long Beach Airport area'],
    established: '1888',
    nickname: 'The International City'
  },
  {
    id: 'south-el-monte',
    name: 'South El Monte',
    slug: 'south-el-monte',
    zipCodes: ['91733'],
    population: 34720,
    distance: 8.8,
    county: 'Los Angeles County',
    areaCodes: ['213', '323', '562', '626'],
    coordinates: { lat: 34.04, lng: -118.04 },
    notableLandmarks: ['South El Monte High School'],
    established: '1958',
    nickname: 'The Friendly City'
  },
  {
    id: 'rowland-heights',
    name: 'Rowland Heights',
    slug: 'rowland-heights',
    zipCodes: ['91748'],
    population: 39820,
    distance: 7.9,
    county: 'Los Angeles County',
    areaCodes: ['562', '626', '657', '714', '840', '909'],
    coordinates: { lat: 33.97, lng: -117.9 },
    notableLandmarks: ['Rowland Heights Community Center'],
    established: '1959',
    nickname: 'The Friendly City'
  },
  {
    id: 'stanton',
    name: 'Stanton',
    slug: 'stanton',
    zipCodes: ['90680'],
    population: 26230,
    distance: 5.9,
    county: 'Orange County',
    areaCodes: ['657', '714'],
    coordinates: { lat: 33.8, lng: -117.99 },
    notableLandmarks: ['Stanton Central Park'],
    established: '1956',
    nickname: 'The Friendly City'
  },
  {
    id: 'artesia',
    name: 'Artesia',
    slug: 'artesia',
    zipCodes: ['90701'],
    population: 14190,
    distance: 4.2,
    county: 'Los Angeles County',
    areaCodes: ['562'],
    coordinates: { lat: 33.86, lng: -118.08 },
    notableLandmarks: ['Artesia Park'],
    established: '1959',
    nickname: 'The Friendly City'
  },
  {
    id: 'los-alamitos',
    name: 'Los Alamitos',
    slug: 'los-alamitos',
    zipCodes: ['90720'],
    population: 21540,
    distance: 6.8,
    county: 'Orange County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.79, lng: -118.06 },
    notableLandmarks: ['Los Alamitos Race Course'],
    established: '1960',
    nickname: 'The Friendly City'
  },
  {
    id: 'anaheim-partial',
    name: 'Anaheim (Partial)',
    slug: 'anaheim-partial',
    zipCodes: ['92801', '92802', '92804', '92805', '92806'],
    population: 252340,
    distance: 9.2,
    county: 'Orange County',
    areaCodes: ['657', '714'],
    coordinates: { lat: 33.84, lng: -117.91 },
    notableLandmarks: ['Disneyland Resort', 'Honda Center'],
    established: '1857',
    nickname: 'The Happiest Place on Earth'
  },
  {
    id: 'brea',
    name: 'Brea',
    slug: 'brea',
    zipCodes: ['92821'],
    population: 37370,
    distance: 6.5,
    county: 'Orange County',
    areaCodes: ['562', '657', '714', '840', '909'],
    coordinates: { lat: 33.92, lng: -117.86 },
    notableLandmarks: ['Brea Mall'],
    established: '1917',
    nickname: 'The Friendly City'
  },
  {
    id: 'garden-grove',
    name: 'Garden Grove',
    slug: 'garden-grove',
    zipCodes: ['92840', '92841', '92845'],
    population: 172680,
    distance: 7.8,
    county: 'Orange County',
    areaCodes: ['562', '657', '714'],
    coordinates: { lat: 33.78, lng: -117.97 },
    notableLandmarks: ['Crystal Cathedral'],
    established: '1874',
    nickname: 'The Friendly City'
  }
]

// Helper functions
export const getCitiesByDistance = (maxDistance: number): ServiceAreaCity[] => {
  return laMiradaServiceArea.filter(city => city.distance <= maxDistance)
}

export const getCitiesByCounty = (county: string): ServiceAreaCity[] => {
  return laMiradaServiceArea.filter(city => city.county === county)
}

export const getTotalPopulation = (): number => {
  return laMiradaServiceArea.reduce((total, city) => total + city.population, 0)
}

export const getCitiesByAreaCode = (areaCode: string): ServiceAreaCity[] => {
  return laMiradaServiceArea.filter(city => city.areaCodes.includes(areaCode))
}

// Export individual city data for easy access
export const {
  laPalma,
  laHabra,
  santaFeSprings,
  whittier,
  buenaPark,
  cerritos,
  downey,
  cypress,
  placentia,
  norwalk,
  picoRivera,
  bellflower,
  lakewood,
  hawaiianGardens,
  fullerton,
  haciendaHeights,
  laPuente,
  montebello,
  bellGardens,
  paramount,
  longBeachPartial,
  southElMonte,
  rowlandHeights,
  stanton,
  artesia,
  losAlamitos,
  anaheimPartial,
  brea,
  gardenGrove
} = laMiradaServiceArea.reduce((acc, city) => {
  acc[city.id.replace(/-/g, '')] = city
  return acc
}, {} as Record<string, ServiceAreaCity>)
