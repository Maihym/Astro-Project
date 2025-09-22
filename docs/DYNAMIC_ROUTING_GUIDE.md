# Dynamic Routing Guide

This guide explains how to add new services and cities to your Astro website with dynamic routing.

## Overview

The website uses a smart routing system that automatically generates pages for:
- Individual services: `/services/[service-slug]`
- Individual cities: `/cities/[city-slug]`
- Service + City combinations: `/services/[service-slug]/[city-slug]`

## Adding New Services

### 1. Create a Service Data File

Create a new file in `src/data/services/` with the service slug as the filename:

```typescript
// src/data/services/your-service-name.ts
export const yourServiceName = {
  id: 'your-service-name',
  title: 'Your Service Title',
  slug: 'your-service-name',
  description: 'Detailed description of your service...',
  shortDescription: 'Brief description for cards and previews.',
  icon: '🔌', // Emoji or icon identifier
  category: 'residential', // or 'commercial', 'emergency', etc.
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    // Add more features
  ],
  benefits: [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
    // Add more benefits
  ],
  pricing: {
    starting: 150, // Starting price
    currency: 'USD',
    unit: 'per hour', // or 'per project', etc.
    note: 'Optional pricing note'
  },
  images: [
    '/images/services/your-service-1.jpg',
    '/images/services/your-service-2.jpg'
  ],
  seo: {
    title: 'Your Service Title | First Electric',
    description: 'SEO description for search engines...',
    keywords: ['keyword1', 'keyword2', 'keyword3']
  }
};
```

### 2. Import and Add to Data Collection

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
];
```

## Adding New Cities

### 1. Create a City Data File

Create a new file in `src/data/cities/` with the city slug as the filename:

```typescript
// src/data/cities/your-city-name.ts
export const yourCityName = {
  id: 'your-city-name',
  name: 'Your City',
  slug: 'your-city-name',
  state: 'State Name',
  stateAbbr: 'ST',
  description: 'Description of electrical services in your city...',
  shortDescription: 'Brief description for cards.',
  population: '123,456',
  area: '45.6 sq mi',
  timezone: 'CST', // or 'EST', 'PST', etc.
  coordinates: {
    lat: 40.7128,
    lng: -74.0060
  },
  serviceAreas: [
    'Downtown',
    'North Side',
    'South Side',
    'East Side',
    'West Side'
  ],
  localInfo: {
    established: '1900',
    nickname: 'City Nickname',
    majorIndustries: ['Industry 1', 'Industry 2', 'Industry 3'],
    notableLandmarks: [
      'Landmark 1',
      'Landmark 2',
      'Landmark 3'
    ]
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'yourcity@firstelectric.com',
    address: '123 Main St, Your City, ST 12345'
  },
  seo: {
    title: 'Electrician in Your City, ST | First Electric',
    description: 'Professional electrical services in Your City, ST...',
    keywords: ['electrician your city', 'your city electrician', 'electrical services your city']
  }
};
```

### 2. Import and Add to Data Collection

Update `src/lib/data.ts`:

```typescript
// Add import
import { yourCityName } from '../data/cities/your-city-name';

// Add to cities array
export const cities: City[] = [
  laMirada,
  whittier,
  cerritos,
  yourCityName, // Add your new city here
];
```

## Automatic Page Generation

Once you add a new service or city to the data collection, the following pages will be automatically generated:

### For a New Service:
- `/services/your-service-name` - Individual service page
- `/services/your-service-name/la-mirada` - Service in La Mirada
- `/services/your-service-name/whittier` - Service in Whittier
- `/services/your-service-name/cerritos` - Service in Cerritos
- (And for any other cities you have)

### For a New City:
- `/cities/your-city-name` - Individual city page
- `/services/residential-wiring/your-city-name` - Residential wiring in your city
- `/services/commercial-electrical/your-city-name` - Commercial electrical in your city
- `/services/emergency-repairs/your-city-name` - Emergency repairs in your city
- (And for any other services you have)

## SEO Benefits

Each page is automatically optimized for SEO with:
- Unique titles and descriptions
- Relevant keywords
- Proper meta tags
- Sitemap inclusion
- Structured data

## File Structure

```
src/
├── data/
│   ├── services/
│   │   ├── residential-wiring.ts
│   │   ├── commercial-electrical.ts
│   │   ├── emergency-repairs.ts
│   │   └── your-new-service.ts
│   └── cities/
│       ├── austin.ts
│       ├── houston.ts
│       ├── dallas.ts
│       └── your-new-city.ts
├── pages/
│   ├── services/
│   │   ├── index.astro
│   │   ├── [service].astro
│   │   └── [service]/
│   │       └── [city].astro
│   └── cities/
│       ├── index.astro
│       └── [city].astro
└── lib/
    └── data.ts
```

## Best Practices

1. **Use descriptive slugs**: Make sure your service and city slugs are URL-friendly and descriptive
2. **Consistent naming**: Use kebab-case for file names and slugs
3. **Complete data**: Fill out all fields in your data files for best SEO results
4. **Unique content**: Each service/city combination gets unique content automatically
5. **Regular updates**: Keep your data files updated with current information

## Testing

After adding new services or cities:

1. Run `npm run dev` to start the development server
2. Visit the new pages to ensure they render correctly
3. Check the sitemap at `/sitemap.xml` to verify new pages are included
4. Test the navigation and internal linking

This system makes it easy to scale your website by simply adding new data files without touching the routing logic!
