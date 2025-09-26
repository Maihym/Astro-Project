// Enhanced Service Data Template for First Electric - Local SEO Optimized
// This template provides the structure for creating new service data files
// that fully comply with Google Local SEO best practices

import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const yourServiceName = {
  // Basic Information
  id: 'your-service-name', // Unique identifier (kebab-case)
  title: 'Your Service Title', // Display name (Title Case)
  slug: 'your-service-name', // URL slug (kebab-case, same as id)
  
  // Enhanced Descriptions with Local Context
  description: 'Complete description of your service with local context. This should be 2-3 sentences that explain what the service is, what it includes, and mention your service areas. Make it compelling and informative for potential customers in La Mirada, Whittier, Cerritos, and surrounding areas.',
  shortDescription: 'Brief description for cards and previews with local context. Include your service areas.', // Used in service cards and quick previews
  
  // Visual Elements
  icon: '🔌', // Emoji or icon identifier - choose something relevant to your service
  category: 'residential', // Category: 'residential', 'commercial', 'emergency', or custom category
  
  // Service Features - List specific services/features you offer with local context
  features: [
    'Feature 1 - Be specific about what you offer in La Mirada, Whittier, and Cerritos',
    'Feature 2 - Use clear, customer-friendly language with local examples',
    'Feature 3 - Focus on what makes you different in the local market',
    'Feature 4 - Include technical details and local code compliance',
    'Feature 5 - Mention C-10 license and local certifications',
    'Feature 6 - Add local permit handling and inspection coordination',
    'Feature 7 - Include 24/7 emergency service availability',
    'Feature 8 - Mention local response times and service areas'
  ],
  
  // Benefits - What customers get from choosing your service with local focus
  benefits: [
    'Licensed C-10 electrical contractor (License #1120441) serving La Mirada, Whittier, and Cerritos',
    '24/7 emergency service with 60-minute response time in local areas',
    'Free estimates and transparent pricing for all local customers',
    'Local permit handling and California electrical code compliance',
    'Experienced with historic homes in Whittier and modern developments in Cerritos',
    'Fully insured and bonded for your protection and peace of mind'
  ],
  
  // Images - Add service-related images with local context (create these in your public/images/services/ folder)
  images: [
    '/images/services/your-service-la-mirada-1.jpg', // Main service image in La Mirada
    '/images/services/your-service-whittier-1.jpg',  // Service image in Whittier
    '/images/services/your-service-cerritos-1.jpg'   // Service image in Cerritos
  ],
  
  // Enhanced content fields
  specifications: {
    duration: '2-4 hours for standard installation', // Typical project duration
    complexity: 'Intermediate' as const, // 'Basic' | 'Intermediate' | 'Advanced'
    permits: true, // Whether permits are required
    warranty: '2-year warranty on all work', // Warranty information
    materials: ['High-quality components', 'Code-compliant materials', 'Safety equipment'] // Materials used
  },
  process: {
    step1: 'Initial assessment and planning', // First step in the process
    step2: 'Permit acquisition and scheduling', // Second step
    step3: 'Professional installation', // Third step
    step4: 'Testing and certification' // Final step
  },
  localExpertise: {
    commonIssues: [
      'Common issue 1 in local areas', // Local-specific issues
      'Common issue 2 in local areas', // Local-specific issues
      'Common issue 3 in local areas', // Local-specific issues
      'Common issue 4 in local areas' // Local-specific issues
    ],
    codeRequirements: 'California Electrical Code compliance with local permit requirements', // Code requirements
    permitProcess: 'Building permits required for electrical work' // Permit process
  },
  technicalDetails: {
    voltage: '120V/240V electrical systems', // Voltage specifications
    amperage: '15A to 200A panel capacity', // Amperage specifications
    codeCompliance: ['NEC 2023', 'California Electrical Code', 'Local building codes'] // Code compliance
  },
  cta: {
    estimateText: 'Free estimates available for all projects', // Call-to-action for estimates
    contactText: 'Call for personalized pricing based on your specific needs' // Contact call-to-action
  },
  
  // Enhanced SEO Configuration with Local Keywords
  seo: {
    title: `Your Service Title in La Mirada, Whittier & Cerritos | ${companyInfo.name}`, // Page title with local keywords
    description: 'Professional your service title in La Mirada, Whittier, Cerritos, and surrounding areas. Licensed C-10 electrical contractor with 24/7 emergency service. Free estimates available.',
    keywords: [
      'your service title la mirada', // Main service + location
      'your service title whittier', // Main service + location
      'your service title cerritos', // Main service + location
      'electrician la mirada', // General electrician + location
      'electrician whittier', // General electrician + location
      'electrician cerritos', // General electrician + location
      'licensed electrician california', // License + location
      'emergency electrician near me', // Emergency + near me
      'electrical contractor la mirada', // Contractor + location
      'electrical services whittier', // Services + location
      'electrical repair cerritos', // Repair + location
      'C-10 electrical contractor', // License type
      '24/7 emergency electrician', // Emergency service
      'free electrical estimates', // Free estimates
      'electrical panel upgrade la mirada', // Specific service + location
      'residential electrician whittier', // Residential + location
      'commercial electrician cerritos' // Commercial + location
    ]
  }
};

// Example of a more specific service:
/*
export const evChargingInstallation = {
  id: 'ev-charging-installation',
  title: 'EV Charging Installation',
  slug: 'ev-charging-installation',
  description: 'Professional electric vehicle charging station installation for homes and businesses. We install Level 1, Level 2, and DC fast charging stations with proper permits and electrical upgrades.',
  shortDescription: 'Professional EV charging station installation for homes and businesses.',
  icon: '⚡',
  category: 'residential',
  features: [
    'Level 1 charging station installation',
    'Level 2 charging station installation',
    'DC fast charging for commercial use',
    'Electrical panel upgrades for EV charging',
    'Permit acquisition and inspection coordination',
    'Smart charging station setup',
    'Load calculation and electrical planning',
    'Outdoor weatherproof installation',
    'Garage and driveway charging solutions',
    'Commercial fleet charging systems'
  ],
  benefits: [
    'Faster charging times compared to standard outlets',
    'Increased home value and market appeal',
    'Energy-efficient smart charging options',
    'Professional installation with warranty'
  ],
  images: [
    '/images/services/ev-charging-1.jpg',
    '/images/services/ev-charging-2.jpg'
  ],
  seo: {
    title: `EV Charging Installation | ${companyInfo.name}`,
    description: 'Professional EV charging station installation for homes and businesses. Licensed electricians install Level 1, Level 2, and DC fast charging stations.',
    keywords: ['EV charging installation', 'electric vehicle charger', 'home EV charging', 'Level 2 charger installation']
  }
};
*/

// Tips for creating effective service data:
/*
1. ID and Slug: Use kebab-case (lowercase with hyphens) for URLs
2. Title: Use Title Case for display purposes
3. Description: Make it compelling and informative (1-2 sentences)
4. Short Description: Keep it concise for cards and previews
5. Icon: Choose relevant emojis or icons that represent your service
6. Category: Use consistent categories across all services
7. Features: Be specific about what you offer - customers want details
8. Benefits: Focus on customer value and outcomes
9. Images: Use high-quality, relevant images (create these separately)
10. SEO: Include relevant keywords and location terms for better search visibility

Categories to consider:
- 'residential' - Home electrical services
- 'commercial' - Business electrical services  
- 'emergency' - 24/7 emergency services
- 'maintenance' - Ongoing service contracts
- 'installation' - New equipment installation
- 'repair' - Fixing existing electrical issues
*/
