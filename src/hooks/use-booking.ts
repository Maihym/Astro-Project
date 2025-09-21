import { useState } from 'react'
import { getBookingInfo } from '../config/business'

export type BookingType = 'freeQuote' | 'serviceCall' | 'inspection'

export function useBooking() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentBooking, setCurrentBooking] = useState<BookingType | null>(null)
  
  const bookingInfo = getBookingInfo()
  
  const bookingConfig = {
    freeQuote: {
      title: 'Schedule Free Quote',
      description: 'Book a convenient time for your free electrical quote',
      url: bookingInfo.freeQuote
    },
    serviceCall: {
      title: 'Schedule Service Call',
      description: 'Book a service appointment for your electrical needs',
      url: bookingInfo.serviceCall
    },
    inspection: {
      title: 'Schedule Inspection',
      description: 'Book an electrical inspection appointment',
      url: bookingInfo.inspection
    }
  }
  
  const openBooking = (type: BookingType) => {
    setCurrentBooking(type)
    setIsOpen(true)
  }
  
  const closeBooking = () => {
    setIsOpen(false)
    setCurrentBooking(null)
  }
  
  const getCurrentBookingConfig = () => {
    if (!currentBooking) return null
    return bookingConfig[currentBooking]
  }
  
  return {
    isOpen,
    currentBooking,
    openBooking,
    closeBooking,
    getCurrentBookingConfig,
    bookingConfig
  }
}
