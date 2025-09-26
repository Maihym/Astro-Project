# Hero Booking Form Integration Guide

## 🚀 **Quick Integration Steps**

### **1. Basic Implementation**

Add to any Astro page:

```astro
---
import InlineBookingForm from '../components/booking/InlineBookingForm';
import PersonalizedBookingModal from '../components/booking/PersonalizedBookingModal';
import { usePersonalizedBooking } from '../hooks/use-personalized-booking';
---

<!-- Hero Variant -->
<InlineBookingForm 
  client:load
  variant="hero"
  serviceType="freeQuote"
  onStartBooking={(data) => {
    // Handle form submission
    console.log('Booking started:', data);
  }}
/>

<!-- Card Variant -->
<InlineBookingForm 
  client:load
  variant="card"
  serviceType="serviceCall"
  onStartBooking={(data) => {
    // Handle form submission
    console.log('Booking started:', data);
  }}
/>

<!-- Minimal Variant -->
<InlineBookingForm 
  client:load
  variant="minimal"
  serviceType="inspection"
  onStartBooking={(data) => {
    // Handle form submission
    console.log('Booking started:', data);
  }}
/>
```

### **2. With Modal Integration**

```astro
---
import InlineBookingForm from '../components/booking/InlineBookingForm';
import PersonalizedBookingModal from '../components/booking/PersonalizedBookingModal';
---

<InlineBookingForm 
  client:load
  variant="hero"
  serviceType="freeQuote"
  onStartBooking={(data) => {
    // Open modal with user data
    window.dispatchEvent(new CustomEvent('openBookingModal', { 
      detail: { 
        initialData: data, 
        serviceType: 'freeQuote' 
      } 
    }));
  }}
/>

<PersonalizedBookingModal 
  client:load
  isOpen={false}
  onClose={() => {
    window.dispatchEvent(new CustomEvent('closeBookingModal'));
  }}
  initialData={{
    firstName: '',
    lastName: '',
    email: ''
  }}
  defaultServiceType="freeQuote"
/>
```

### **3. Service Types**

| Service Type | Description | Calendar URL |
|--------------|-------------|--------------|
| `freeQuote` | Free Quote | `https://calendar.app.google/KA9sCmb1mqv8m7TH6` |
| `serviceCall` | Service Call ($189) | `https://calendar.app.google/3S63HemGbJM3BXsj7` |
| `inspection` | Inspection ($350) | `https://calendar.app.google/kuoM2qEwm2osbUBi6` |

### **4. Variants**

| Variant | Use Case | Styling |
|---------|----------|---------|
| `hero` | Homepage hero sections | Large, prominent styling |
| `card` | Service pages, content areas | Contained in card |
| `minimal` | Sidebars, footers | Compact form |

## 🎨 **Styling Customization**

### **CSS Classes**
- All components use Tailwind CSS
- Responsive design built-in
- Mobile-first approach
- Touch-friendly (44px minimum touch targets)

### **Custom Styling**
```css
/* Custom button styling */
.booking-form-button {
  @apply bg-primary text-primary-foreground hover:bg-primary/90;
}

/* Custom form styling */
.booking-form-input {
  @apply border-input focus:border-primary focus:ring-primary;
}
```

## 📱 **Mobile Optimization**

### **Responsive Breakpoints**
- **Mobile (< 768px)**: Single column, full-width
- **Tablet (768px - 1024px)**: Two column layout
- **Desktop (> 1024px)**: Full layout with proper spacing

### **Touch Optimization**
- Minimum 44px touch targets
- Proper spacing between interactive elements
- Swipe-friendly modal on mobile
- Keyboard navigation support

## 🔧 **Advanced Configuration**

### **Business Configuration**
Update `src/config/business.ts`:

```typescript
export const businessConfig = {
  // ... existing config
  booking: {
    freeQuote: "https://calendar.app.google/KA9sCmb1mqv8m7TH6",
    serviceCall: "https://calendar.app.google/3S63HemGbJM3BXsj7", 
    inspection: "https://calendar.app.google/kuoM2qEwm2osbUBi6"
  }
};
```

### **Form Validation**
```typescript
// Custom validation rules
const validateForm = (data: BookingFormData) => {
  const errors: Record<string, string> = {};
  
  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required';
  }
  
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return errors;
};
```

## 🚀 **Production Deployment**

### **Build Process**
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### **Environment Variables**
```env
# Add to .env
PUBLIC_SITE_URL=https://firstelectric.pro
PUBLIC_ANALYTICS_ID=G-QD0KG6NZHP
```

### **Performance Optimization**
- Components are code-split
- Lazy loading implemented
- Minimal bundle size
- Fast hydration

## 📊 **Analytics Integration**

### **Form Tracking**
```javascript
// Track form interactions
gtag('event', 'form_start', {
  event_category: 'booking',
  event_label: 'inline_form'
});

gtag('event', 'form_submit', {
  event_category: 'booking', 
  event_label: 'booking_complete'
});
```

### **Conversion Tracking**
```javascript
// Track conversions
gtag('event', 'conversion', {
  send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL'
});
```

## 🔍 **Testing Checklist**

### **Before Deployment**
- [ ] All variants render correctly
- [ ] Form validation works
- [ ] Mobile responsiveness tested
- [ ] Modal functionality works
- [ ] Calendar links open correctly
- [ ] Analytics tracking implemented
- [ ] Error handling in place

### **Post-Deployment**
- [ ] Monitor form submissions
- [ ] Check analytics data
- [ ] Test on real devices
- [ ] Monitor performance metrics
- [ ] User feedback collection

## 🆘 **Troubleshooting**

### **Common Issues**

**Component not rendering:**
- Check `client:load` directive
- Verify import paths
- Check console for errors

**Form not submitting:**
- Verify `onStartBooking` callback
- Check form validation
- Test in browser console

**Modal not opening:**
- Check event listeners
- Verify state management
- Test modal component isolation

**Mobile issues:**
- Check viewport meta tag
- Test touch interactions
- Verify responsive classes

## 📞 **Support**

For technical support or questions:
- Check component documentation
- Review test reports
- Test in development environment
- Monitor browser console for errors

---

**Last Updated:** January 15, 2025  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
