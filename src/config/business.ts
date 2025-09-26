/**
 * Centralized business configuration for First Electric
 * This file contains all business information to ensure consistency across the website
 */

export interface BusinessConfig {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
    founded: string;
    license: string;
    licenseUrl: string;
  };
  contact: {
    main: {
      phone: string;
      email: string;
      address: {
        street: string;
        city: string;
        state: string;
        zip: string;
        full: string;
      };
    };
    emergency: {
      phone: string;
      email: string;
      available: string;
    };
    departments: {
      general: string;
      emergency: string;
      quotes: string;
      support: string;
    };
  };
  hours: {
    regular: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    emergency: string;
    timezone: string;
  };
  social: {
    website: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    google?: string;
    yelp?: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    defaultKeywords: string[];
    author: string;
    language: string;
  };
  branding: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    logo: string;
    favicon: string;
  };
  booking: {
    freeQuote: string;
    serviceCall: string;
    inspection: string;
  };
  analytics: {
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
    googleSearchConsoleId?: string;
    facebookPixelId?: string;
    environment: 'development' | 'staging' | 'production';
  };
}

export const businessConfig: BusinessConfig = {
  company: {
    name: "First Electric",
    legalName: "First Electric LLC",
    tagline: "The first ones you call",
    description: "Professional electrical services for residential and commercial properties. Licensed, insured, and committed to excellence.",
    founded: "2024",
    license: "C-10 License #1120441",
    licenseUrl: "https://www2.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx"
  },
  contact: {
    main: {
      phone: "(657) 239-6331",
      email: "contact@firstelectric.pro",
      address: {
        street: "12310 La Pomelo Rd",
        city: "La Mirada",
        state: "California",
        zip: "90638",
        full: "12310 La Pomelo Rd, La Mirada, CA 90638"
      }
    },
    emergency: {
      phone: "(657) 239-6331",
      email: "contact@firstelectric.pro",
      available: "24/7"
    },
    departments: {
      general: "info@firstelectric.pro",
      emergency: "emergency@firstelectric.pro",
      quotes: "quotes@firstelectric.pro",
      support: "support@firstelectric.pro"
    }
  },
  hours: {
    regular: {
      weekdays: "Monday - Sunday: 24/7",
      saturday: "",
      sunday: ""
    },
    emergency: "24/7 Emergency Service Available",
    timezone: "PST"
  },
  social: {
    website: "https://new2.firstelectric.pro",
    facebook: "https://facebook.com/firstelectric",
    instagram: "https://instagram.com/firstelectric",
    linkedin: "https://linkedin.com/company/firstelectric",
    google: "https://g.page/firstelectric",
    yelp: "https://yelp.com/biz/firstelectric"
  },
  seo: {
    defaultTitle: "First Electric - Professional Electrical Services",
    defaultDescription: "Professional electrical services for residential and commercial properties. Licensed electricians serving La Mirada, Whittier, Cerritos and surrounding areas.",
    defaultKeywords: [
      "electrician",
      "electrical services",
      "electrical contractor",
      "residential electrician",
      "commercial electrician",
      "emergency electrical",
      "electrical repair",
      "electrical installation",
      "La Mirada electrician",
      "Whittier electrician",
      "Cerritos electrician"
    ],
    author: "First Electric",
    language: "en-US"
  },
  branding: {
    primaryColor: "#1e3a8a",
    secondaryColor: "#3b82f6",
    accentColor: "#fbbf24",
    logo: "/logo.svg",
    favicon: "/favicon.svg"
  },
  booking: {
    freeQuote: "https://calendar.app.google/KA9sCmb1mqv8m7TH6",
    serviceCall: "https://calendar.app.google/3S63HemGbJM3BXsj7",
    inspection: "https://calendar.app.google/kuoM2qEwm2osbUBi6"
  },
  analytics: {
    // Google Analytics 4 Measurement ID - Production Ready
    googleAnalyticsId: "G-QD0KG6NZHP",
    // googleTagManagerId: "GTM-XXXXXXX",
    // googleSearchConsoleId: "your-search-console-id",
    // facebookPixelId: "your-facebook-pixel-id",
    environment: 'production' // Ready for production tracking
  }
};

// Helper functions for common business information
export const getBusinessInfo = () => businessConfig;

export const getContactInfo = () => businessConfig.contact;

export const getCompanyInfo = () => businessConfig.company;

export const getHoursInfo = () => businessConfig.hours;

export const getSocialLinks = () => businessConfig.social;

export const getSEOInfo = () => businessConfig.seo;

export const getBrandingInfo = () => businessConfig.branding;

export const getBookingInfo = () => businessConfig.booking;

export const getAnalyticsInfo = () => businessConfig.analytics;

// Utility functions for formatting
export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export const formatAddress = (address: typeof businessConfig.contact.main.address) => {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
};

export const getFullBusinessName = () => {
  return `${businessConfig.company.name} - ${businessConfig.company.tagline}`;
};

export const getEmergencyContact = () => {
  return {
    phone: businessConfig.contact.emergency.phone,
    email: businessConfig.contact.emergency.email,
    available: businessConfig.contact.emergency.available
  };
};

export const getRegularHours = () => {
  return [
    businessConfig.hours.regular.weekdays,
    businessConfig.hours.regular.saturday,
    businessConfig.hours.regular.sunday
  ];
};
