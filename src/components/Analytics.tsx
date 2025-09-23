/**
 * Analytics Component for First Electric
 * Handles Google Analytics 4, conversion tracking, and development mode
 */

import { useEffect } from 'react';
import { getAnalyticsInfo, getBusinessInfo } from '../config/business';

interface AnalyticsProps {
  pageTitle?: string;
  pagePath?: string;
}

// Global gtag function type
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    trackQuoteRequest: (source?: string) => void;
    trackEmergencyContact: (method?: 'phone' | 'email' | 'form') => void;
    trackServicePageView: (service: string, city?: string) => void;
    trackCityPageView: (city: string) => void;
    trackPhoneCall: (phoneNumber: string, context?: string) => void;
    trackBookingClick: (bookingType: 'free_quote' | 'service_call' | 'inspection') => void;
  }
}

export const Analytics: React.FC<AnalyticsProps> = ({ 
  pageTitle, 
  pagePath 
}) => {
  const analyticsInfo = getAnalyticsInfo();
  const businessInfo = getBusinessInfo();

  useEffect(() => {
    // Expose tracking functions to global window object
    window.trackQuoteRequest = trackQuoteRequest;
    window.trackEmergencyContact = trackEmergencyContact;
    window.trackServicePageView = trackServicePageView;
    window.trackCityPageView = trackCityPageView;
    window.trackPhoneCall = trackPhoneCall;
    window.trackBookingClick = trackBookingClick;

    // Only load analytics in production or when explicitly enabled
    if (analyticsInfo.environment === 'development' && !analyticsInfo.googleAnalyticsId) {
      console.log('🔧 Analytics: Development mode - tracking disabled');
      return;
    }

    if (!analyticsInfo.googleAnalyticsId) {
      console.warn('⚠️ Analytics: No Google Analytics ID configured');
      return;
    }

    // Initialize Google Analytics 4
    const initializeGA4 = () => {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsInfo.googleAnalyticsId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      // Configure Google Analytics
      window.gtag('js', new Date());
      window.gtag('config', analyticsInfo.googleAnalyticsId, {
        page_title: pageTitle || document.title,
        page_location: pagePath || window.location.href,
        custom_map: {
          'custom_parameter_1': 'business_type',
          'custom_parameter_2': 'service_area'
        }
      });

      // Set custom dimensions
      window.gtag('config', analyticsInfo.googleAnalyticsId, {
        custom_map: {
          'custom_parameter_1': 'business_type',
          'custom_parameter_2': 'service_area'
        }
      });

      console.log('✅ Analytics: Google Analytics 4 initialized');
    };

    initializeGA4();
  }, [analyticsInfo.googleAnalyticsId, analyticsInfo.environment, pageTitle, pagePath]);

  // Track page views
  useEffect(() => {
    if (analyticsInfo.environment === 'development' && !analyticsInfo.googleAnalyticsId) {
      return;
    }

    if (window.gtag && analyticsInfo.googleAnalyticsId) {
      window.gtag('event', 'page_view', {
        page_title: pageTitle || document.title,
        page_location: pagePath || window.location.href,
        business_type: 'electrical_services',
        service_area: 'la_mirada_whittier_cerritos'
      });
    }
  }, [pageTitle, pagePath, analyticsInfo.googleAnalyticsId, analyticsInfo.environment]);

  return null; // This component doesn't render anything
};

// Conversion tracking functions
export const trackQuoteRequest = (source: string = 'website') => {
  const analyticsInfo = getAnalyticsInfo();
  
  if (analyticsInfo.environment === 'development' && !analyticsInfo.googleAnalyticsId) {
    console.log('🔧 Analytics: Quote request tracked (development mode)', { source });
    return;
  }

  if (window.gtag && analyticsInfo.googleAnalyticsId) {
    window.gtag('event', 'quote_request', {
      event_category: 'conversion',
      event_label: 'free_quote',
      value: 1,
      source: source,
      business_type: 'electrical_services'
    });
    console.log('✅ Analytics: Quote request tracked', { source });
  }
};

export const trackEmergencyContact = (method: 'phone' | 'email' | 'form' = 'phone') => {
  const analyticsInfo = getAnalyticsInfo();
  
  if (analyticsInfo.environment === 'development' && !analyticsInfo.googleAnalyticsId) {
    console.log('🔧 Analytics: Emergency contact tracked (development mode)', { method });
    return;
  }

  if (window.gtag && analyticsInfo.googleAnalyticsId) {
    window.gtag('event', 'emergency_contact', {
      event_category: 'conversion',
      event_label: 'emergency_service',
      value: 1,
      contact_method: method,
      business_type: 'electrical_services'
    });
    console.log('✅ Analytics: Emergency contact tracked', { method });
  }
};

export const trackServicePageView = (service: string, city?: string) => {
  const analyticsInfo = getAnalyticsInfo();
  
  if (analyticsInfo.environment === 'development' && !analyticsInfo.googleAnalyticsId) {
    console.log('🔧 Analytics: Service page view tracked (development mode)', { service, city });
    return;
  }

  if (window.gtag && analyticsInfo.googleAnalyticsId) {
    window.gtag('event', 'service_page_view', {
      event_category: 'engagement',
      event_label: service,
      service_type: service,
      city: city || 'general',
      business_type: 'electrical_services'
    });
    console.log('✅ Analytics: Service page view tracked', { service, city });
  }
};

export const trackCityPageView = (city: string) => {
  const analyticsInfo = getAnalyticsInfo();
  
  if (analyticsInfo.environment === 'development' && !analyticsInfo.googleAnalyticsId) {
    console.log('🔧 Analytics: City page view tracked (development mode)', { city });
    return;
  }

  if (window.gtag && analyticsInfo.googleAnalyticsId) {
    window.gtag('event', 'city_page_view', {
      event_category: 'engagement',
      event_label: city,
      city: city,
      business_type: 'electrical_services'
    });
    console.log('✅ Analytics: City page view tracked', { city });
  }
};

export const trackPhoneCall = (phoneNumber: string, context: string = 'general') => {
  const analyticsInfo = getAnalyticsInfo();
  
  if (analyticsInfo.environment === 'development' && !analyticsInfo.googleAnalyticsId) {
    console.log('🔧 Analytics: Phone call tracked (development mode)', { phoneNumber, context });
    return;
  }

  if (window.gtag && analyticsInfo.googleAnalyticsId) {
    window.gtag('event', 'phone_call', {
      event_category: 'conversion',
      event_label: 'phone_contact',
      value: 1,
      phone_number: phoneNumber,
      context: context,
      business_type: 'electrical_services'
    });
    console.log('✅ Analytics: Phone call tracked', { phoneNumber, context });
  }
};

export const trackBookingClick = (bookingType: 'free_quote' | 'service_call' | 'inspection') => {
  const analyticsInfo = getAnalyticsInfo();
  
  if (analyticsInfo.environment === 'development' && !analyticsInfo.googleAnalyticsId) {
    console.log('🔧 Analytics: Booking click tracked (development mode)', { bookingType });
    return;
  }

  if (window.gtag && analyticsInfo.googleAnalyticsId) {
    window.gtag('event', 'booking_click', {
      event_category: 'engagement',
      event_label: bookingType,
      booking_type: bookingType,
      business_type: 'electrical_services'
    });
    console.log('✅ Analytics: Booking click tracked', { bookingType });
  }
};

// Development mode helper
export const isAnalyticsEnabled = () => {
  const analyticsInfo = getAnalyticsInfo();
  return analyticsInfo.environment === 'production' || !!analyticsInfo.googleAnalyticsId;
};

export default Analytics;
