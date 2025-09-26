// Mock data for testing components
export const mockCompanyInfo = {
  name: 'First Electric',
  phone: '(657) 239-6331',
  email: 'contact@firstelectric.pro',
  address: '12310 La Pomelo Rd, La Mirada, CA 90638'
}

export const mockServices = [
  {
    id: 'residential-wiring',
    name: 'Residential Wiring',
    description: 'Expert residential electrical wiring services',
    icon: '⚡'
  },
  {
    id: 'commercial-electrical',
    name: 'Commercial Electrical',
    description: 'Professional commercial electrical solutions',
    icon: '🏢'
  },
  {
    id: 'emergency-repairs',
    name: 'Emergency Repairs',
    description: '24/7 emergency electrical repair services',
    icon: '🚨'
  }
]

export const mockCities = [
  {
    id: 'la-mirada',
    name: 'La Mirada',
    state: 'CA',
    population: 48008,
    services: 8
  },
  {
    id: 'whittier',
    name: 'Whittier',
    state: 'CA',
    population: 87306,
    services: 8
  },
  {
    id: 'cerritos',
    name: 'Cerritos',
    state: 'CA',
    population: 49041,
    services: 8
  }
]

export const mockBookingFormData = {
  hero: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com'
  },
  card: {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phone: '555-987-6543'
  },
  minimal: {
    email: 'test@example.com'
  }
}

export const mockModalData = {
  isOpen: true,
  initialData: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com'
  },
  defaultServiceType: 'freeQuote' as const
}

// Mock API responses
export const mockApiResponses = {
  success: {
    status: 200,
    data: {
      message: 'Booking request submitted successfully',
      bookingId: 'BK-123456'
    }
  },
  error: {
    status: 400,
    data: {
      message: 'Invalid form data',
      errors: {
        email: 'Invalid email format'
      }
    }
  }
}

// Mock user interactions
export const mockUserInteractions = {
  formSubmission: {
    type: 'form-submit',
    data: mockBookingFormData.hero
  },
  modalOpen: {
    type: 'modal-open',
    data: mockModalData
  },
  modalClose: {
    type: 'modal-close'
  }
}
