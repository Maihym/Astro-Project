// Core Services
export { commercialElectrical } from './commercial-electrical'
export { emergencyRepairs } from './emergency-repairs'
export { residentialWiring } from './residential-wiring'

// High-Priority Services (Based on Keyword Analysis)
export { evChargingInstallation } from './ev-charging-installation'
export { ceilingFanInstallation } from './ceiling-fan-installation'
export { circuitBreakerServices } from './circuit-breaker-services'
export { gfciOutletServices } from './gfci-outlet-services'
export { backupGeneratorInstallation } from './backup-generator-installation'

// Additional Services
export { electricalPanelServices } from './electrical-panel-services'
export { outletRepairServices } from './outlet-repair-services'
export { lightingInstallation } from './lighting-installation'
export { electricalInspection } from './electrical-inspection'
export { smartHomeElectrical } from './smart-home-electrical'

// All services array for easy iteration
export const allServices = [
  // Core Services
  commercialElectrical,
  emergencyRepairs,
  residentialWiring,
  
  // High-Priority Services
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
  smartHomeElectrical
]

// Service categories for organization
export const serviceCategories = {
  core: [commercialElectrical, emergencyRepairs, residentialWiring],
  highPriority: [evChargingInstallation, ceilingFanInstallation, circuitBreakerServices, gfciOutletServices, backupGeneratorInstallation],
  additional: [electricalPanelServices, outletRepairServices, lightingInstallation, electricalInspection, smartHomeElectrical]
}

// Helper function to get service by slug
export function getServiceBySlug(slug: string) {
  return allServices.find(service => service.slug === slug)
}

// Helper function to get services by category
export function getServicesByCategory(category: string) {
  return allServices.filter(service => service.category === category)
}
