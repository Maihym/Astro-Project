// Global booking modal system for Astro pages
class BookingModal {
  constructor() {
    this.isOpen = false
    this.currentBooking = null
    this.modal = null
    this.overlay = null
    
    this.bookingConfig = {
      freeQuote: {
        title: 'Schedule Free Quote',
        url: '' // Will be populated from window.bookingUrls
      },
      serviceCall: {
        title: 'Schedule Service Call', 
        url: '' // Will be populated from window.bookingUrls
      },
      inspection: {
        title: 'Schedule Inspection',
        url: '' // Will be populated from window.bookingUrls
      }
    }
    
    this.init()
  }
  
  init() {
    // Wait for booking URLs to be available
    if (window.bookingUrls) {
      this.updateBookingUrls()
    } else {
      // Listen for booking URLs to be set
      window.addEventListener('bookingUrlsReady', () => {
        this.updateBookingUrls()
      })
    }
    
    // Create modal HTML
    this.createModal()
    
    // Add event listeners
    this.addEventListeners()
  }
  
  updateBookingUrls() {
    if (window.bookingUrls) {
      this.bookingConfig.freeQuote.url = window.bookingUrls.freeQuote
      this.bookingConfig.serviceCall.url = window.bookingUrls.serviceCall
      this.bookingConfig.inspection.url = window.bookingUrls.inspection
    }
  }
  
  createModal() {
    // Create overlay
    this.overlay = document.createElement('div')
    this.overlay.className = 'fixed inset-0 bg-black/50 z-50 hidden'
    this.overlay.id = 'booking-overlay'
    
    // Create modal
    this.modal = document.createElement('div')
    this.modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 hidden'
    this.modal.id = 'booking-modal'
    
    this.modal.innerHTML = `
      <div class="bg-background rounded-lg shadow-lg w-[95vw] h-[90vh] max-w-none relative">
        <button 
          id="booking-close" 
          class="absolute top-4 right-4 z-10 h-8 w-8 p-0 bg-background/80 hover:bg-background rounded-md flex items-center justify-center"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div id="booking-content" class="w-full h-full">
          <div class="flex items-center justify-center h-full">
            <div class="text-center">
              <p class="text-muted-foreground mb-4">Loading booking calendar...</p>
            </div>
          </div>
        </div>
      </div>
    `
    
    // Add to body
    document.body.appendChild(this.overlay)
    document.body.appendChild(this.modal)
  }
  
  addEventListeners() {
    // Close button
    document.addEventListener('click', (e) => {
      if (e.target.id === 'booking-close' || e.target.closest('#booking-close')) {
        this.close()
      }
    })
    
    // Overlay click to close
    this.overlay.addEventListener('click', () => {
      this.close()
    })
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close()
      }
    })
  }
  
  open(type) {
    const config = this.bookingConfig[type]
    if (!config) {
      console.error('Invalid booking type:', type)
      return
    }
    
    if (!config.url) {
      this.showError('Calendar booking is not yet configured. Please contact us directly to schedule your appointment.')
      return
    }
    
    // Track booking click for analytics
    if (window.trackBookingClick) {
      window.trackBookingClick(type)
    }
    
    this.currentBooking = type
    this.isOpen = true
    
    // Show modal
    this.overlay.classList.remove('hidden')
    this.modal.classList.remove('hidden')
    
    // Load iframe
    const content = document.getElementById('booking-content')
    content.innerHTML = `
      <iframe
        src="${config.url}"
        class="w-full h-full border-0 rounded-lg"
        title="Booking Calendar"
        loading="lazy"
      ></iframe>
    `
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden'
  }
  
  close() {
    this.isOpen = false
    this.currentBooking = null
    
    // Hide modal
    this.overlay.classList.add('hidden')
    this.modal.classList.add('hidden')
    
    // Clear iframe
    const content = document.getElementById('booking-content')
    content.innerHTML = `
      <div class="flex items-center justify-center h-full">
        <div class="text-center">
          <p class="text-muted-foreground mb-4">Loading booking calendar...</p>
        </div>
      </div>
    `
    
    // Restore body scroll
    document.body.style.overflow = ''
  }
  
  showError(message) {
    const content = document.getElementById('booking-content')
    content.innerHTML = `
      <div class="flex items-center justify-center h-full">
        <div class="text-center">
          <p class="text-muted-foreground mb-4">${message}</p>
        </div>
      </div>
    `
    
    this.overlay.classList.remove('hidden')
    this.modal.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.bookingModal = new BookingModal()
})

// Global function to open booking
window.openBooking = function(type) {
  if (window.bookingModal) {
    window.bookingModal.open(type)
  }
}
