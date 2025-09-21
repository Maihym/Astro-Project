# Business Configuration System

This directory contains the centralized business configuration for First Electric website. This system ensures consistency across all pages and components.

## Files

### `business.ts`
The main business configuration file containing all business information:

- **Company Information**: Name, tagline, description, founded date, license
- **Contact Information**: Main phone, email, address, emergency contacts, department emails
- **Business Hours**: Regular hours, emergency availability, timezone
- **Social Media**: Website, Facebook, Instagram, LinkedIn, Google, Yelp links
- **SEO Information**: Default title, description, keywords, author, language
- **Branding**: Colors, logo, favicon paths

### `test-consistency.ts`
A test utility to verify that all business information is consistent across the website.

## Usage

### Importing Business Information

```typescript
import { 
  getBusinessInfo, 
  getContactInfo, 
  getCompanyInfo, 
  getHoursInfo,
  getSocialLinks,
  getSEOInfo,
  getBrandingInfo 
} from '../config/business';
```

### Using in Components

```typescript
// In React components
const companyInfo = getCompanyInfo();
const contactInfo = getContactInfo();

return (
  <div>
    <h1>{companyInfo.name}</h1>
    <p>{companyInfo.tagline}</p>
    <a href={`tel:${contactInfo.main.phone}`}>{contactInfo.main.phone}</a>
  </div>
);
```

```astro
---
// In Astro components
import { getCompanyInfo, getContactInfo } from '../config/business';

const companyInfo = getCompanyInfo();
const contactInfo = getContactInfo();
---

<div>
  <h1>{companyInfo.name}</h1>
  <p>{companyInfo.tagline}</p>
  <a href={`tel:${contactInfo.main.phone}`}>{contactInfo.main.phone}</a>
</div>
```

## Benefits

1. **Consistency**: All business information is centralized and consistent across the website
2. **Maintainability**: Update business information in one place
3. **Type Safety**: TypeScript interfaces ensure correct usage
4. **Scalability**: Easy to add new business information fields
5. **Testing**: Built-in consistency testing utilities

## Updating Business Information

To update business information:

1. Edit `src/config/business.ts`
2. Update the relevant fields in the `businessConfig` object
3. Run the consistency test to verify changes
4. All components and pages will automatically use the updated information

## Testing Consistency

Run the consistency test to verify all business information is properly used:

```typescript
import { testBusinessConsistency } from '../config/test-consistency';

// This will log all business information and check for consistency
testBusinessConsistency();
```

## City Data Integration

City data files now import from the business configuration to ensure contact information consistency:

```typescript
// In city data files
import { getContactInfo } from '../../config/business';

const contactInfo = getContactInfo();

export const cityName = {
  // ... other city data
  contact: {
    phone: contactInfo.main.phone,
    email: contactInfo.main.email,
    address: contactInfo.main.address.full
  }
};
```

This ensures that all cities use the same main business contact information while maintaining their individual city-specific data.
