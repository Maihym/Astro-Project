import type { CollectionEntry } from 'astro:content';

// Service data imports
import { residentialWiring } from '../data/services/residential-wiring';
import { commercialElectrical } from '../data/services/commercial-electrical';
import { emergencyRepairs } from '../data/services/emergency-repairs';
import { evChargingInstallation } from '../data/services/ev-charging-installation';
import { ceilingFanInstallation } from '../data/services/ceiling-fan-installation';
import { circuitBreakerServices } from '../data/services/circuit-breaker-services';
import { gfciOutletServices } from '../data/services/gfci-outlet-services';
import { backupGeneratorInstallation } from '../data/services/backup-generator-installation';
import { electricalPanelServices } from '../data/services/electrical-panel-services';
import { outletRepairServices } from '../data/services/outlet-repair-services';
import { lightingInstallation } from '../data/services/lighting-installation';
import { electricalInspection } from '../data/services/electrical-inspection';
import { smartHomeElectrical } from '../data/services/smart-home-electrical';

// City data imports
import { laMirada } from '../data/cities/la-mirada';
import { whittier } from '../data/cities/whittier';
import { cerritos } from '../data/cities/cerritos';

// Business config import
import { getCompanyInfo } from '../config/business';

// Type definitions
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  category: string;
  features: string[];
  benefits: string[];
  images: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  stateAbbr: string;
  description: string;
  shortDescription: string;
  population: string;
  area: string;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  serviceAreas: string[];
  localInfo: {
    established: string;
    nickname: string;
    majorIndustries: string[];
    notableLandmarks: string[];
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Service data collection
export const services: Service[] = [
  // Core Services
  residentialWiring,
  commercialElectrical,
  emergencyRepairs,
  
  // High-Priority Services (Based on Keyword Analysis)
  evChargingInstallation,
  ceilingFanInstallation,
  circuitBreakerServices,
  gfciOutletServices,
  backupGeneratorInstallation,
  
  // Additional Services
  electricalPanelServices,
  outletRepairServices,
  lightingInstallation,
  electricalInspection,
  smartHomeElectrical,
];

// City data collection
export const cities: City[] = [
  laMirada,
  whittier,
  cerritos,
];

// Utility functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}

export function getAllCities(): City[] {
  return cities;
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => service.category === category);
}

export function getCitiesByState(state: string): City[] {
  return cities.filter(city => city.state === state);
}

// Generate static paths for dynamic routes
export function getServicePaths() {
  return services.map(service => ({
    params: { service: service.slug },
    props: { service }
  }));
}

export function getCityPaths() {
  return cities.map(city => ({
    params: { city: city.slug },
    props: { city }
  }));
}

export function getServiceCityPaths() {
  const paths: Array<{ params: { service: string; city: string }; props: { service: Service; city: City } }> = [];
  
  services.forEach(service => {
    cities.forEach(city => {
      paths.push({
        params: { service: service.slug, city: city.slug },
        props: { service, city }
      });
    });
  });
  
  return paths;
}

// SEO helpers
export function generateServiceCitySEO(service: Service, city: City) {
  const companyInfo = getCompanyInfo();
  return {
    title: `${service.title} in ${city.name}, ${city.stateAbbr} | ${companyInfo.name}`,
    description: `Professional ${service.title.toLowerCase()} services in ${city.name}, ${city.stateAbbr}. ${service.shortDescription} Licensed electricians serving ${city.name} and surrounding areas.`,
    keywords: [
      ...service.seo.keywords,
      ...city.seo.keywords,
      `${service.title.toLowerCase()} ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} ${service.title.toLowerCase()}`
    ]
  };
}
