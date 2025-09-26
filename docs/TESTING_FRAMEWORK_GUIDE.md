# Testing Framework Guide

## 🧪 **Complete Testing Framework for Hero Booking Forms**

This guide covers the comprehensive testing framework implemented for the First Electric LLC website, specifically focusing on the Hero Booking Form components.

## 📁 **Test Structure**

```
src/test/
├── setup.ts                    # Test setup and global config
├── utils/
│   ├── test-utils.tsx          # Custom render utilities
│   └── mock-data.ts            # Mock data for tests
└── components/
    ├── form-components.test.tsx    # All form components
    └── modal-components.test.tsx  # All modal components

tests/
├── e2e/
│   ├── booking-flow.spec.ts        # E2E booking tests
│   ├── mobile-booking.spec.ts      # Mobile-specific tests
│   └── accessibility.spec.ts        # A11y tests

stories/
└── booking/
    ├── InlineBookingForm.stories.tsx
    └── PersonalizedBookingModal.stories.tsx
```

## 🚀 **Available Test Commands**

### **Unit & Integration Tests**
```bash
npm run test              # Run tests in watch mode
npm run test:ui           # Run tests with UI
npm run test:run          # Run tests once
npm run test:coverage     # Run with coverage report
```

### **End-to-End Tests**
```bash
npm run test:e2e          # Run E2E tests
npm run test:e2e:ui       # Run E2E tests with UI
```

### **Visual Testing**
```bash
npm run storybook         # Start Storybook
npm run build-storybook   # Build Storybook
```

### **All Tests**
```bash
npm run test:all          # Run all tests
```

## 🎯 **Testing Strategy**

### **1. Unit Tests (70%)**
- **Component rendering** - Does it render without errors?
- **User interactions** - Do clicks, typing, etc. work?
- **Form validation** - Are validation rules enforced?
- **State management** - Does component state work correctly?

### **2. Integration Tests (20%)**
- **Component communication** - Do components talk to each other?
- **Event handling** - Do events flow correctly?
- **Modal interactions** - Do modals open/close properly?

### **3. E2E Tests (10%)**
- **Complete user journeys** - Can users complete bookings?
- **Cross-browser compatibility** - Does it work on all browsers?
- **Mobile responsiveness** - Does it work on mobile devices?

## 📊 **Test Coverage Areas**

### **Form Components**
- ✅ **Rendering** - All variants (hero, card, minimal) render correctly
- ✅ **Validation** - Required fields, email format, phone format
- ✅ **Submission** - Form submits with valid data
- ✅ **Error handling** - Graceful error handling and user feedback
- ✅ **Accessibility** - Screen reader support, keyboard navigation

### **Modal Components**
- ✅ **Opening/Closing** - Modal opens and closes correctly
- ✅ **Focus management** - Focus trapped within modal
- ✅ **Keyboard navigation** - Escape key, tab navigation
- ✅ **Data flow** - Initial data populates correctly

### **User Journeys**
- ✅ **Complete booking flow** - From form to modal to submission
- ✅ **Error scenarios** - Network errors, validation errors
- ✅ **Mobile experience** - Touch interactions, responsive design
- ✅ **Accessibility** - Screen reader support, keyboard navigation

## 🔧 **Test Utilities**

### **Reusable Test Functions**
```typescript
// Form validation testing
expectFormValidation(user, form, requiredFields)

// Modal testing
expectModalToOpen(modal)
expectModalToClose(modal)

// Accessibility testing
expectAccessibleForm(form)

// Visual testing
expectResponsiveLayout(container, breakpoint)
```

### **Mock Data**
```typescript
// Pre-defined test data
mockBookingFormData
mockModalData
mockApiResponses
mockUserInteractions
```

## 📱 **Mobile Testing**

### **Responsive Design Tests**
- ✅ **Mobile layout** - 375px width testing
- ✅ **Tablet layout** - 768px width testing
- ✅ **Desktop layout** - 1920px width testing

### **Touch Optimization**
- ✅ **Button sizes** - Minimum 44px touch targets
- ✅ **Swipe gestures** - Swipe to close modals
- ✅ **Touch interactions** - Tap, drag, pinch

## ♿ **Accessibility Testing**

### **WCAG Compliance**
- ✅ **Color contrast** - 4.5:1 minimum ratio
- ✅ **Keyboard navigation** - Tab, Enter, Escape keys
- ✅ **Screen reader support** - ARIA labels, roles
- ✅ **Focus management** - Visible focus indicators

### **Accessibility Tools**
- ✅ **axe-core integration** - Automated accessibility scanning
- ✅ **Manual testing** - Screen reader testing
- ✅ **Keyboard testing** - Full keyboard navigation

## 🎨 **Visual Testing**

### **Storybook Stories**
- ✅ **Component variants** - All form and modal variants
- ✅ **Responsive views** - Mobile, tablet, desktop
- ✅ **Interactive playground** - Test components in isolation
- ✅ **Documentation** - Auto-generated component docs

### **Visual Regression**
- ✅ **Screenshot comparison** - Detect visual changes
- ✅ **Cross-browser testing** - Chrome, Firefox, Safari
- ✅ **Device testing** - iPhone, Android, tablet

## 🚀 **Running Tests**

### **Development Workflow**
```bash
# Start development server
npm run dev

# Run tests in watch mode
npm run test

# Run E2E tests
npm run test:e2e

# Start Storybook
npm run storybook
```

### **CI/CD Pipeline**
```bash
# Run all tests
npm run test:all

# Generate coverage report
npm run test:coverage

# Build Storybook
npm run build-storybook
```

## 📈 **Test Metrics**

### **Coverage Goals**
- **Unit tests**: 90%+ coverage
- **Integration tests**: 80%+ coverage
- **E2E tests**: 100% user journeys
- **Accessibility**: 100% WCAG compliance

### **Performance Targets**
- **Unit tests**: < 5 seconds
- **Integration tests**: < 10 seconds
- **E2E tests**: < 30 seconds
- **Visual tests**: < 15 seconds

## 🔍 **Debugging Tests**

### **Unit Test Debugging**
```bash
# Run specific test file
npm run test src/test/components/form-components.test.tsx

# Run with verbose output
npm run test -- --reporter=verbose

# Run with coverage
npm run test:coverage
```

### **E2E Test Debugging**
```bash
# Run with UI
npm run test:e2e:ui

# Run specific test
npm run test:e2e tests/e2e/booking-flow.spec.ts

# Run with debug mode
npm run test:e2e -- --debug
```

## 📝 **Best Practices**

### **Writing Tests**
1. **Test behavior, not implementation** - Focus on what users see
2. **Use descriptive test names** - Clear what the test does
3. **Keep tests simple** - One assertion per test
4. **Use mock data** - Consistent test data
5. **Test edge cases** - Error scenarios, empty states

### **Maintaining Tests**
1. **Update tests with features** - Keep tests in sync
2. **Remove obsolete tests** - Clean up unused tests
3. **Monitor test performance** - Keep tests fast
4. **Review test coverage** - Ensure comprehensive coverage

## 🎯 **Success Metrics**

### **Quality Indicators**
- ✅ **Zero test failures** - All tests pass
- ✅ **High coverage** - 90%+ code coverage
- ✅ **Fast execution** - Tests run quickly
- ✅ **Reliable results** - Consistent test results

### **Business Impact**
- ✅ **User satisfaction** - Better user experience
- ✅ **Reduced bugs** - Fewer production issues
- ✅ **Faster development** - Confident code changes
- ✅ **Better accessibility** - Inclusive design

This testing framework ensures your Hero Booking Forms are robust, accessible, and user-friendly across all devices and browsers!
