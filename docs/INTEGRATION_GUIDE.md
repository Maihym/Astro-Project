# Hero Booking Form - Integration Guide

## 🎯 **Integration Overview**
This guide provides step-by-step instructions for integrating the Hero Booking Form system into existing pages. The system includes both the original multi-step form and the new personalized booking approach.

## 📁 **Available Components**

### **Core Components**
- `InlineBookingForm.tsx` - Simple inline form with 3 variants
- `PersonalizedBookingModal.tsx` - Full personalized modal
- `use-personalized-booking.ts` - Booking flow management hook
- `HeroBookingForm.tsx` - Original full form (still available)

### **Component Variants**
- **Hero Variant**: Large, prominent form for homepage hero sections
- **Card Variant**: Card-based design for service pages
- **Minimal Variant**: Compact form for sidebars/footers

## 🔧 **Integration Steps**

### **Step 1: Import Required Components**

```tsx
// Import the components you need
import InlineBookingForm from '../components/booking/InlineBookingForm'
import PersonalizedBookingModal from '../components/booking/PersonalizedBookingModal'
import { usePersonalizedBooking } from '../hooks/use-personalized-booking'
```

### **Step 2: Set Up Booking Flow Management**

```tsx
// In your component or page
const {
  isModalOpen,
  initialData,
  defaultServiceType,
  startBooking,
  closeBooking,
  onBookingComplete
} = usePersonalizedBooking()
```

### **Step 3: Add Inline Form**

```tsx
// Choose the appropriate variant for your page
<InlineBookingForm
  variant="hero" // or "card" or "minimal"
  serviceType="freeQuote" // or "serviceCall" or "inspection"
  onStartBooking={(data) => {
    startBooking(data, 'freeQuote')
  }}
/>
```

### **Step 4: Add Modal**

```tsx
// Add the personalized modal
<PersonalizedBookingModal
  isOpen={isModalOpen}
  onClose={closeBooking}
  initialData={initialData}
  defaultServiceType={defaultServiceType}
/>
```

## 🏠 **Homepage Integration**

### **Replace Existing Hero CTAs**

**Before:**
```html
<button onclick="openBooking('freeQuote')">
  Get Free Quote
</button>
```

**After:**
```tsx
<InlineBookingForm
  variant="hero"
  serviceType="freeQuote"
  onStartBooking={(data) => {
    startBooking(data, 'freeQuote')
  }}
/>
```

### **Complete Homepage Integration Example**

```tsx
import React from 'react'
import InlineBookingForm from '../components/booking/InlineBookingForm'
import PersonalizedBookingModal from '../components/booking/PersonalizedBookingModal'
import { usePersonalizedBooking } from '../hooks/use-personalized-booking'

const Homepage = () => {
  const {
    isModalOpen,
    initialData,
    defaultServiceType,
    startBooking,
    closeBooking
  } = usePersonalizedBooking()

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Professional Electrical Services</h1>
        <p>Quality workmanship you can trust</p>
        
        {/* Inline Booking Form */}
        <InlineBookingForm
          variant="hero"
          serviceType="freeQuote"
          onStartBooking={(data) => {
            startBooking(data, 'freeQuote')
          }}
        />
      </section>
      
      {/* Personalized Modal */}
      <PersonalizedBookingModal
        isModalOpen={isModalOpen}
        onClose={closeBooking}
        initialData={initialData}
        defaultServiceType={defaultServiceType}
      />
    </div>
  )
}
```

## 🛠️ **Service Page Integration**

### **Add Service-Specific Booking Forms**

```tsx
// For service pages, use the card variant
<InlineBookingForm
  variant="card"
  serviceType="serviceCall" // or specific service type
  onStartBooking={(data) => {
    startBooking(data, 'serviceCall')
  }}
/>
```

### **Service Page Integration Example**

```tsx
import React from 'react'
import InlineBookingForm from '../components/booking/InlineBookingForm'
import PersonalizedBookingModal from '../components/booking/PersonalizedBookingModal'
import { usePersonalizedBooking } from '../hooks/use-personalized-booking'

const ServicePage = ({ serviceType = 'serviceCall' }) => {
  const {
    isModalOpen,
    initialData,
    defaultServiceType,
    startBooking,
    closeBooking
  } = usePersonalizedBooking()

  return (
    <div>
      {/* Service Content */}
      <section className="service-content">
        <h1>Commercial Electrical Services</h1>
        <p>Professional electrical solutions for your business</p>
        
        {/* Service-Specific Booking Form */}
        <InlineBookingForm
          variant="card"
          serviceType={serviceType}
          onStartBooking={(data) => {
            startBooking(data, serviceType)
          }}
        />
      </section>
      
      {/* Personalized Modal */}
      <PersonalizedBookingModal
        isModalOpen={isModalOpen}
        onClose={closeBooking}
        initialData={initialData}
        defaultServiceType={defaultServiceType}
      />
    </div>
  )
}
```

## 🏙️ **City Page Integration**

### **Add Location-Aware Booking Forms**

```tsx
// For city pages, use the card variant with location context
<InlineBookingForm
  variant="card"
  serviceType="freeQuote"
  onStartBooking={(data) => {
    startBooking(data, 'freeQuote')
  }}
/>
```

### **City Page Integration Example**

```tsx
import React from 'react'
import InlineBookingForm from '../components/booking/InlineBookingForm'
import PersonalizedBookingModal from '../components/booking/PersonalizedBookingModal'
import { usePersonalizedBooking } from '../hooks/use-personalized-booking'

const CityPage = ({ cityName }) => {
  const {
    isModalOpen,
    initialData,
    defaultServiceType,
    startBooking,
    closeBooking
  } = usePersonalizedBooking()

  return (
    <div>
      {/* City Content */}
      <section className="city-content">
        <h1>Electrical Services in {cityName}</h1>
        <p>Professional electrical solutions for {cityName} residents</p>
        
        {/* Location-Aware Booking Form */}
        <InlineBookingForm
          variant="card"
          serviceType="freeQuote"
          onStartBooking={(data) => {
            startBooking(data, 'freeQuote')
          }}
        />
      </section>
      
      {/* Personalized Modal */}
      <PersonalizedBookingModal
        isModalOpen={isModalOpen}
        onClose={closeBooking}
        initialData={initialData}
        defaultServiceType={defaultServiceType}
      />
    </div>
  )
}
```

## 📱 **Sidebar/Footer Integration**

### **Add Minimal Booking Forms**

```tsx
// For sidebars and footers, use the minimal variant
<InlineBookingForm
  variant="minimal"
  serviceType="freeQuote"
  onStartBooking={(data) => {
    startBooking(data, 'freeQuote')
  }}
/>
```

### **Sidebar Integration Example**

```tsx
import React from 'react'
import InlineBookingForm from '../components/booking/InlineBookingForm'
import PersonalizedBookingModal from '../components/booking/PersonalizedBookingModal'
import { usePersonalizedBooking } from '../hooks/use-personalized-booking'

const Sidebar = () => {
  const {
    isModalOpen,
    initialData,
    defaultServiceType,
    startBooking,
    closeBooking
  } = usePersonalizedBooking()

  return (
    <aside className="sidebar">
      <h3>Get Your Free Quote</h3>
      
      {/* Minimal Booking Form */}
      <InlineBookingForm
        variant="minimal"
        serviceType="freeQuote"
        onStartBooking={(data) => {
          startBooking(data, 'freeQuote')
        }}
      />
      
      {/* Personalized Modal */}
      <PersonalizedBookingModal
        isModalOpen={isModalOpen}
        onClose={closeBooking}
        initialData={initialData}
        defaultServiceType={defaultServiceType}
      />
    </aside>
  )
}
```

## 🎨 **Styling and Customization**

### **Component Styling**

The components use Tailwind CSS classes and can be customized with additional classes:

```tsx
<InlineBookingForm
  variant="hero"
  serviceType="freeQuote"
  className="custom-styling" // Add custom classes
  onStartBooking={(data) => {
    startBooking(data, 'freeQuote')
  }}
/>
```

### **Theme Customization**

The components inherit the design system colors and can be customized through CSS variables:

```css
:root {
  --primary: #1e3a8a;
  --primary-foreground: #ffffff;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
}
```

## 📊 **Analytics Integration**

### **Track Form Interactions**

```tsx
// Add analytics tracking to the booking flow
const handleBookingStart = (data) => {
  // Track form start
  gtag('event', 'booking_form_start', {
    service_type: 'freeQuote',
    user_name: data.firstName
  })
  
  startBooking(data, 'freeQuote')
}

const handleBookingComplete = (formData) => {
  // Track form completion
  gtag('event', 'booking_form_complete', {
    service_type: formData.serviceType,
    user_name: formData.firstName,
    completion_time: Date.now()
  })
  
  onBookingComplete(formData)
}
```

### **Analytics Events to Track**

- `booking_form_start` - When user starts the booking process
- `booking_form_step_complete` - When user completes a step
- `booking_form_abandon` - When user abandons the form
- `booking_form_complete` - When user completes the booking
- `booking_calendar_redirect` - When user is redirected to calendar

## 🔧 **Advanced Configuration**

### **Custom Service Types**

```tsx
// Add custom service types
const customServiceType = 'customService'

<InlineBookingForm
  variant="hero"
  serviceType={customServiceType}
  onStartBooking={(data) => {
    startBooking(data, customServiceType)
  }}
/>
```

### **Custom Validation**

```tsx
// Add custom validation
const customValidation = (data) => {
  // Custom validation logic
  return {
    isValid: true,
    errors: {}
  }
}
```

### **Custom Styling**

```tsx
// Custom styling for specific variants
<InlineBookingForm
  variant="hero"
  serviceType="freeQuote"
  className="bg-gradient-to-r from-blue-500 to-purple-600"
  onStartBooking={(data) => {
    startBooking(data, 'freeQuote')
  }}
/>
```

## 🚨 **Error Handling**

### **Form Validation Errors**

```tsx
// Handle form validation errors
const handleFormError = (errors) => {
  console.error('Form validation errors:', errors)
  // Show error messages to user
}
```

### **Network Errors**

```tsx
// Handle network errors
const handleNetworkError = (error) => {
  console.error('Network error:', error)
  // Show error message to user
  // Retry mechanism
}
```

### **Modal Errors**

```tsx
// Handle modal errors
const handleModalError = (error) => {
  console.error('Modal error:', error)
  // Close modal
  // Show error message
}
```

## 📱 **Mobile Optimization**

### **Touch-Friendly Design**

The components are optimized for mobile with:
- 44px minimum touch targets
- Swipe gesture support
- Mobile-friendly input types
- Responsive layouts

### **Mobile Testing**

```tsx
// Test on mobile devices
const isMobile = window.innerWidth < 768

if (isMobile) {
  // Mobile-specific optimizations
  console.log('Mobile device detected')
}
```

## 🔄 **State Management**

### **Booking Flow State**

```tsx
// The booking flow state is managed by the hook
const {
  isModalOpen,        // Whether modal is open
  initialData,        // Initial form data
  defaultServiceType, // Default service type
  startBooking,       // Function to start booking
  closeBooking,       // Function to close modal
  onBookingComplete   // Callback for completion
} = usePersonalizedBooking()
```

### **Data Persistence**

```tsx
// Data is automatically saved to localStorage
// No additional configuration needed
```

## 🧪 **Testing Integration**

### **Unit Testing**

```tsx
// Test component rendering
import { render, screen } from '@testing-library/react'
import InlineBookingForm from '../components/booking/InlineBookingForm'

test('renders inline booking form', () => {
  render(
    <InlineBookingForm
      variant="hero"
      serviceType="freeQuote"
      onStartBooking={jest.fn()}
    />
  )
  
  expect(screen.getByText('Get Your Free Quote')).toBeInTheDocument()
})
```

### **Integration Testing**

```tsx
// Test complete booking flow
import { render, screen, fireEvent } from '@testing-library/react'
import { usePersonalizedBooking } from '../hooks/use-personalized-booking'

test('complete booking flow', () => {
  // Test form submission
  // Test modal opening
  // Test step navigation
  // Test form completion
})
```

## 📝 **Best Practices**

### **Component Usage**

1. **Choose the right variant** for your page context
2. **Set appropriate service types** based on page content
3. **Handle errors gracefully** with proper error boundaries
4. **Test on mobile devices** to ensure touch optimization
5. **Track analytics events** for user behavior insights

### **Performance Optimization**

1. **Lazy load components** when possible
2. **Optimize images** and assets
3. **Minimize bundle size** by importing only needed components
4. **Use React.memo** for expensive components
5. **Implement proper cleanup** in useEffect hooks

### **Accessibility**

1. **Use semantic HTML** elements
2. **Provide proper ARIA labels** for screen readers
3. **Ensure keyboard navigation** works correctly
4. **Test with screen readers** for accessibility compliance
5. **Provide clear error messages** for form validation

## 🚀 **Deployment Checklist**

### **Pre-Deployment**

- [ ] All components are tested
- [ ] No linting errors
- [ ] TypeScript compilation successful
- [ ] Mobile testing completed
- [ ] Accessibility testing completed
- [ ] Analytics integration tested
- [ ] Error handling implemented

### **Post-Deployment**

- [ ] Monitor form submissions
- [ ] Track conversion rates
- [ ] Monitor error rates
- [ ] Collect user feedback
- [ ] Optimize based on analytics

This integration guide provides comprehensive instructions for implementing the Hero Booking Form system across different page types and contexts.
