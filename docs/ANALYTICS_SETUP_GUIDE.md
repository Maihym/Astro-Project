# Analytics & Tracking Setup Guide - First Electric

## 🎯 Overview

This guide provides step-by-step instructions for setting up Google Analytics 4, Google Search Console, and conversion tracking for the First Electric website.

## ✅ Current Implementation Status

### **What's Already Implemented**
- ✅ Analytics component with Google Analytics 4 integration
- ✅ Conversion tracking functions for all key actions
- ✅ Development mode (tracking disabled until production)
- ✅ Google Search Console verification meta tag support
- ✅ Structured data for local business
- ✅ Booking system with conversion tracking
- ✅ Phone call tracking integration

### **What You Need to Do**
- [ ] Create Google Analytics 4 property
- [ ] Set up Google Search Console
- [ ] Add tracking IDs to configuration
- [ ] Test tracking in production
- [ ] Set up conversion goals

---

## 📊 Google Analytics 4 Setup

### **Step 1: Create GA4 Property**

1. **Go to Google Analytics**
   - Visit [analytics.google.com](https://analytics.google.com)
   - Sign in with your Google account

2. **Create New Property**
   - Click "Start measuring" or "Create Property"
   - Property name: "First Electric Website"
   - Reporting time zone: Pacific Time
   - Currency: USD

3. **Configure Data Stream**
   - Choose "Web" platform
   - Website URL: `https://firstelectric.pro` (or your production domain)
   - Stream name: "First Electric Website"

4. **Get Measurement ID**
   - Copy your Measurement ID (format: G-XXXXXXXXXX)
   - This will be added to your configuration

### **Step 2: Configure Conversion Goals**

1. **Go to Events in GA4**
   - Navigate to Configure > Events
   - Mark these events as conversions:
     - `quote_request`
     - `emergency_contact`
     - `phone_call`
     - `booking_click`

2. **Set Up Custom Dimensions**
   - Go to Configure > Custom Definitions
   - Add these custom dimensions:
     - `business_type` (electrical_services)
     - `service_area` (la_mirada_whittier_cerritos)
     - `contact_method` (phone, email, form)

---

## 🔍 Google Search Console Setup

### **Step 1: Add Property**

1. **Go to Google Search Console**
   - Visit [search.google.com/search-console](https://search.google.com/search-console)
   - Sign in with your Google account

2. **Add Property**
   - Click "Add Property"
   - Choose "URL prefix"
   - Enter your website URL: `https://firstelectric.pro`

3. **Verify Ownership**
   - Choose "HTML tag" verification method
   - Copy the verification code (content attribute)
   - This will be added to your configuration

### **Step 2: Submit Sitemap**

1. **Submit Sitemap**
   - Go to Sitemaps section
   - Add sitemap URL: `https://firstelectric.pro/sitemap.xml`
   - Click "Submit"

2. **Request Indexing**
   - Use URL Inspection tool
   - Submit key pages for indexing:
     - Homepage
     - Service pages
     - City pages
     - Contact page

---

## ⚙️ Configuration Setup

### **Step 1: Update Business Configuration**

Edit `src/config/business.ts` and update the analytics section:

```typescript
analytics: {
  googleAnalyticsId: "G-XXXXXXXXXX", // Your GA4 Measurement ID
  googleSearchConsoleId: "your-verification-code", // Your Search Console verification code
  environment: 'production' // Change from 'development' to 'production'
}
```

### **Step 2: Environment Variables (Optional)**

For added security, you can use environment variables:

1. **Create `.env` file** (add to .gitignore):
```env
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GSC_VERIFICATION_ID=your-verification-code
```

2. **Update configuration** to use environment variables:
```typescript
analytics: {
  googleAnalyticsId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID,
  googleSearchConsoleId: import.meta.env.PUBLIC_GSC_VERIFICATION_ID,
  environment: 'production'
}
```

---

## 🧪 Testing & Validation

### **Step 1: Test in Development**

1. **Enable Development Tracking**
   - Temporarily set `environment: 'production'` in config
   - Add your GA4 Measurement ID
   - Test locally with `npm run dev`

2. **Verify Tracking**
   - Open browser dev tools
   - Check console for analytics messages
   - Verify gtag events are firing

### **Step 2: Test in Production**

1. **Deploy to Production**
   - Deploy with production configuration
   - Verify tracking is working

2. **Use Google Analytics DebugView**
   - Go to GA4 > Configure > DebugView
   - Enable debug mode in your browser
   - Verify events are being received

3. **Test Conversion Tracking**
   - Click booking buttons
   - Make test phone calls
   - Submit quote forms
   - Verify events appear in GA4

---

## 📈 Conversion Goals Setup

### **Primary Goals (High Priority)**

1. **Quote Requests**
   - Event: `quote_request`
   - Value: 1
   - Source tracking: website, phone, referral

2. **Emergency Contacts**
   - Event: `emergency_contact`
   - Value: 1
   - Method tracking: phone, email, form

3. **Phone Calls**
   - Event: `phone_call`
   - Value: 1
   - Context tracking: header, footer, service page

### **Secondary Goals (Medium Priority)**

1. **Service Page Views**
   - Event: `service_page_view`
   - Engagement tracking
   - Service and city tracking

2. **Booking Clicks**
   - Event: `booking_click`
   - Booking type tracking
   - Conversion funnel analysis

---

## 📊 Key Metrics to Monitor

### **Traffic Metrics**
- Organic traffic growth
- Local search traffic
- Mobile vs desktop split
- Geographic distribution

### **Conversion Metrics**
- Quote form submissions
- Phone call volume
- Emergency service requests
- Overall conversion rate

### **Performance Metrics**
- Page load speeds
- Core Web Vitals
- Mobile usability
- SEO performance

---

## 🔧 Troubleshooting

### **Common Issues**

1. **Analytics Not Loading**
   - Check Measurement ID format (G-XXXXXXXXXX)
   - Verify environment is set to 'production'
   - Check browser console for errors

2. **Events Not Tracking**
   - Verify tracking functions are called
   - Check GA4 DebugView
   - Ensure gtag is loaded

3. **Search Console Not Verifying**
   - Check verification code format
   - Ensure meta tag is in <head>
   - Wait 24-48 hours for verification

### **Debug Commands**

```javascript
// Check if analytics is loaded
console.log('GA4 loaded:', !!window.gtag);

// Check data layer
console.log('Data layer:', window.dataLayer);

// Test tracking function
window.trackQuoteRequest('test');
```

---

## 📅 Launch Checklist

### **Pre-Launch**
- [ ] GA4 property created and configured
- [ ] Search Console property added and verified
- [ ] Tracking IDs added to configuration
- [ ] Environment set to 'production'
- [ ] Conversion goals configured in GA4
- [ ] Sitemap submitted to Search Console

### **Post-Launch**
- [ ] Verify tracking is working
- [ ] Test all conversion events
- [ ] Set up automated reports
- [ ] Monitor for 48 hours
- [ ] Document baseline metrics

---

## 📚 Additional Resources

### **Google Analytics 4**
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Conversion Tracking](https://support.google.com/analytics/answer/9216061)
- [Custom Dimensions](https://support.google.com/analytics/answer/10075209)

### **Google Search Console**
- [Search Console Setup](https://support.google.com/webmasters/answer/9128668)
- [Sitemap Submission](https://support.google.com/webmasters/answer/183668)
- [URL Inspection](https://support.google.com/webmasters/answer/9012289)

### **Local SEO**
- [Google My Business](https://business.google.com)
- [Local SEO Best Practices](https://developers.google.com/search/docs/guides/local-seo)

---

## 🎯 Next Steps After Setup

1. **Monitor Performance** (Week 1)
   - Check daily for tracking issues
   - Verify conversion events
   - Monitor traffic patterns

2. **Optimize Based on Data** (Week 2-4)
   - Identify high-performing pages
   - Optimize conversion funnels
   - A/B test key elements

3. **Scale and Expand** (Month 2+)
   - Add more conversion goals
   - Implement advanced tracking
   - Set up automated reporting

---

*Last Updated: January 2024*
*Next Review: After production launch*
*Status: Ready for implementation*
