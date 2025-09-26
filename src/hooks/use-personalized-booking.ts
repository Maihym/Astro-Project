import { useState } from 'react'

export interface BookingInitialData {
  firstName: string
  lastName: string
  email: string
}

export function usePersonalizedBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [initialData, setInitialData] = useState<BookingInitialData | null>(null)
  const [defaultServiceType, setDefaultServiceType] = useState<'freeQuote' | 'serviceCall' | 'inspection'>('freeQuote')
  
  const startBooking = (data: BookingInitialData, serviceType: 'freeQuote' | 'serviceCall' | 'inspection' = 'freeQuote') => {
    setInitialData(data)
    setDefaultServiceType(serviceType)
    setIsModalOpen(true)
  }
  
  const closeBooking = () => {
    setIsModalOpen(false)
    setInitialData(null)
  }
  
  const onBookingComplete = (formData: any) => {
    console.log('Booking completed:', formData)
    // Here you could add analytics tracking, email notifications, etc.
    closeBooking()
  }
  
  return {
    isModalOpen,
    initialData,
    defaultServiceType,
    startBooking,
    closeBooking,
    onBookingComplete
  }
}
