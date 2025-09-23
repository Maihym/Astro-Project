# Service Page Template Guide

This guide explains how to use the service page template system to create new service pages for your First Electric website.

## Overview

The service page template system consists of:
1. **Service Data Template** (`src/templates/service-data-template.ts`) - Defines the service information
2. **Service Page Template** (`src/templates/service-page-template.astro`) - Defines the page structure
3. **Dynamic Routing** - Automatically generates pages for services and service+city combinations

## Quick Start

### Step 1: Create Service Data

1. Copy `src/templates/service-data-template.ts` to `src/data/services/your-service-name.ts`
2. Customize all the fields with your service information
3. Update `src/lib/data.ts` to import and include your new service

### Step 2: The Page is Automatically Created

The existing dynamic routing system will automatically create:
- `/services/your-service-name` - Main service page
- `/services/your-service-name/la-mirada` - Service in La Mirada
- `/services/your-service-name/whittier` - Service in Whittier  
- `/services/your-service-name/cerritos` - Service in Cerritos

## Detailed Instructions

### Creating a New Service

#### 1. Create the Service Data File

```bash
# Copy the template
cp src/templates/service-data-template.ts src/data/services/your-service-name.ts
```

#### 2. Customize the Service Data

Edit `src/data/services/your-service-name.ts`:

```typescript
import { getCompanyInfo } from '../../config/business'

const companyInfo = getCompanyInfo()

export const yourServiceName = {
  id: 'your-service-name',
  title: 'Your Service Title',
  slug: 'your-service-name',
  description: 'Your detailed service description...',
  shortDescription: 'Brief description for cards.',
  icon: '🔌',
  category: 'residential',
  features: [
    'Feature 1',
    'Feature 2',
    // ... more features
  ],
  benefits: [
    'Benefit 1',
    'Benefit 2',
    // ... more benefits
  ],
  images: [
    '/images/services/your-service-1.jpg',
    '/images/services/your-service-2.jpg'
  ],
  seo: {
    title: `Your Service Title | ${companyInfo.name}`,
    description: 'SEO description...',
    keywords: ['keyword1', 'keyword2']
  }
};
```

#### 3. Add to Data Collection

Update `src/lib/data.ts`:

```typescript
// Add import
import { yourServiceName } from '../data/services/your-service-name';

// Add to services array
export const services: Service[] = [
  residentialWiring,
  commercialElectrical,
  emergencyRepairs,
  yourServiceName, // Add your new service here
  // ... other services
];
```

#### 4. Add Service Images

Create and add images to `public/images/services/`:
- `your-service-1.jpg` - Main service image
- `your-service-2.jpg` - Additional service image

### Service Data Fields Explained

#### Required Fields

- **id**: Unique identifier (kebab-case)
- **title**: Display name (Title Case)
- **slug**: URL slug (kebab-case, same as id)
- **description**: Detailed description (1-2 sentences)
- **shortDescription**: Brief description for cards
- **icon**: Emoji or icon identifier
- **category**: Service category
- **features**: Array of service features
- **benefits**: Array of customer benefits
- **images**: Array of image paths
- **seo**: SEO configuration object

#### SEO Configuration

```typescript
seo: {
  title: `Service Title | ${companyInfo.name}`,
  description: 'SEO-optimized description under 160 characters',
  keywords: ['primary keyword', 'secondary keyword', 'location keyword']
}
```

#### Categories

Use consistent categories across services:
- `'residential'` - Home electrical services
- `'commercial'` - Business electrical services
- `'emergency'` - 24/7 emergency services
- `'maintenance'` - Ongoing service contracts
- `'installation'` - New equipment installation
- `'repair'` - Fixing existing electrical issues

## Page Structure

The service page template includes these sections:

### 1. Hero Section
- Service icon and title
- Description
- Call-to-action buttons

### 2. Features Section
- Grid of service features
- Professional descriptions

### 3. Benefits Section
- Why choose this service
- Customer value propositions

### 4. Process Section
- 4-step process explanation
- Visual step indicators

### 5. FAQ Section
- Common questions and answers
- Service-specific information

### 6. Cities We Serve
- Links to service+city pages
- City information cards

### 7. Free Quote Section
- Call-to-action for quotes
- Contact information

### 8. Final CTA Section
- Primary call-to-action
- Contact encouragement

## SEO Best Practices

### Title Tags
- Include service name and company name
- Keep under 60 characters
- Use location keywords when relevant

### Meta Descriptions
- Include primary service keywords
- Mention location if relevant
- Keep under 160 characters
- Include call-to-action

### Keywords
- Primary service terms
- Location-based keywords
- Long-tail keyword phrases
- Related service terms

### Content Structure
- Use descriptive headings (H1, H2, H3)
- Include service-specific content
- Add local information where relevant
- Use structured data markup

## Testing Your New Service

### 1. Development Testing

```bash
# Start development server
npm run dev

# Visit your new service page
http://localhost:4321/services/your-service-name
```

### 2. Check All Generated Pages

Verify these pages work correctly:
- `/services/your-service-name`
- `/services/your-service-name/la-mirada`
- `/services/your-service-name/whittier`
- `/services/your-service-name/cerritos`

### 3. SEO Validation

- Check page titles and descriptions
- Verify meta tags are correct
- Test structured data
- Validate HTML markup

## Advanced Customization

### Custom Page Sections

To add custom sections to a specific service:

1. Create a custom service page by copying the template
2. Modify the page structure as needed
3. Update the routing in `src/pages/services/[service].astro`

### Service-Specific Content

Add service-specific content by:
- Customizing the FAQ section
- Adding service-specific process steps
- Including relevant certifications or credentials
- Adding before/after images or case studies

### Integration with Booking System

The template includes booking system integration:
- `onclick="openBooking('freeQuote')"` for quote requests
- Customize booking parameters as needed
- Add service-specific booking forms if required

## Troubleshooting

### Common Issues

1. **Service not appearing**: Check that it's added to `src/lib/data.ts`
2. **Images not loading**: Verify image paths in `public/images/services/`
3. **SEO issues**: Check title and description length
4. **Routing problems**: Ensure slug matches id exactly

### Validation Checklist

- [ ] Service data file created and customized
- [ ] Service added to data collection
- [ ] Images added to public folder
- [ ] All pages load correctly
- [ ] SEO meta tags are correct
- [ ] Booking system integration works
- [ ] Mobile responsiveness tested

## Examples

### Example: EV Charging Installation

```typescript
export const evChargingInstallation = {
  id: 'ev-charging-installation',
  title: 'EV Charging Installation',
  slug: 'ev-charging-installation',
  description: 'Professional electric vehicle charging station installation for homes and businesses.',
  shortDescription: 'Professional EV charging station installation.',
  icon: '⚡',
  category: 'residential',
  features: [
    'Level 1 charging station installation',
    'Level 2 charging station installation',
    'Electrical panel upgrades for EV charging',
    'Permit acquisition and inspection coordination'
  ],
  benefits: [
    'Faster charging times',
    'Increased home value',
    'Energy-efficient smart charging',
    'Professional installation with warranty'
  ],
  images: [
    '/images/services/ev-charging-1.jpg',
    '/images/services/ev-charging-2.jpg'
  ],
  seo: {
    title: `EV Charging Installation | ${companyInfo.name}`,
    description: 'Professional EV charging station installation for homes and businesses. Licensed electricians install Level 1 and Level 2 charging stations.',
    keywords: ['EV charging installation', 'electric vehicle charger', 'home EV charging', 'Level 2 charger installation']
  }
};
```

This creates pages at:
- `/services/ev-charging-installation`
- `/services/ev-charging-installation/la-mirada`
- `/services/ev-charging-installation/whittier`
- `/services/ev-charging-installation/cerritos`

## Support

For questions or issues with the service page template system:
1. Check this documentation first
2. Review existing service implementations
3. Test with the development server
4. Validate all data fields are complete
