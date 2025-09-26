import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Progress } from '../ui/progress'
import { ChevronLeft, ChevronRight, Calendar, CheckCircle } from 'lucide-react'
import { getBookingInfo } from '../../config/business'
import BookingStep1 from './BookingStep1'
import BookingStep3 from './BookingStep3'

export interface BookingFormData {
  // Step 1: Service Selection & Basic Info
  serviceType: 'freeQuote' | 'serviceCall' | 'inspection'
  firstName: string
  lastName: string
  email: string
  
  // Step 2: Calendar (handled by external calendar)
  selectedDate?: string
  selectedTime?: string
  
  // Step 3: Contact & Location Details
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  description: string
  referralSource: string
  
  // Step 4: Review & Submit
  agreedToTerms: boolean
}

export interface BookingFormProps {
  defaultServiceType?: 'freeQuote' | 'serviceCall' | 'inspection'
  onComplete?: (data: BookingFormData) => void
  onCancel?: () => void
  className?: string
}

const STORAGE_KEY = 'first-electric-booking-form'

export default function HeroBookingForm({
  defaultServiceType = 'freeQuote',
  onComplete,
  onCancel,
  className = ''
}: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<BookingFormData>({
    serviceType: defaultServiceType,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'CA',
    zipCode: '',
    description: '',
    referralSource: '',
    agreedToTerms: false
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const formRef = useRef<HTMLDivElement>(null)
  
  const bookingInfo = getBookingInfo()
  
  // Auto-save functionality
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFormData(prev => ({ ...prev, ...parsedData }))
      } catch (error) {
        console.warn('Failed to parse saved booking data:', error)
      }
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
  }, [formData])
  
  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe && currentStep < 4) {
      handleNext()
    }
    if (isRightSwipe && currentStep > 1) {
      handlePrevious()
    }
  }
  
  const steps = [
    { number: 1, title: 'Service & Info', icon: '⚡' },
    { number: 2, title: 'Schedule', icon: '📅' },
    { number: 3, title: 'Details', icon: '📍' },
    { number: 4, title: 'Review', icon: '✅' }
  ]
  
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }
    
    if (step === 3) {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
      } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
      if (!formData.address.trim()) newErrors.address = 'Address is required'
      if (!formData.city.trim()) newErrors.city = 'City is required'
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required'
      if (!formData.description.trim()) newErrors.description = 'Please describe your electrical needs'
    }
    
    if (step === 4) {
      if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to the terms and conditions'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 2) {
        // Redirect to calendar
        const calendarUrl = bookingInfo[formData.serviceType]
        window.open(calendarUrl, '_blank')
        return
      }
      setCurrentStep(prev => Math.min(prev + 1, 4))
    }
  }
  
  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }
  
  const handleSubmit = async () => {
    if (!validateStep(4)) return
    
    setIsLoading(true)
    try {
      // Clear saved data
      localStorage.removeItem(STORAGE_KEY)
      
      // Call completion handler
      if (onComplete) {
        onComplete(formData)
      }
      
      // Redirect to appropriate calendar
      const calendarUrl = bookingInfo[formData.serviceType]
      window.open(calendarUrl, '_blank')
    } catch (error) {
      console.error('Booking submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  const updateFormData = (updates: Partial<BookingFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
    // Clear errors for updated fields
    const newErrors = { ...errors }
    Object.keys(updates).forEach(key => {
      delete newErrors[key]
    })
    setErrors(newErrors)
  }
  
  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Select Service & Basic Information'
      case 2: return 'Choose Your Appointment Time'
      case 3: return 'Contact & Location Details'
      case 4: return 'Review & Confirm'
      default: return 'Booking Form'
    }
  }
  
  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return 'Tell us what service you need and provide your basic information'
      case 2: return 'Pick a convenient time for your appointment'
      case 3: return 'Help us locate you and understand your electrical needs'
      case 4: return 'Review your information and confirm your booking'
      default: return ''
    }
  }
  
  return (
    <div 
      ref={formRef}
      className={`w-full max-w-4xl mx-auto ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center pb-4 sm:pb-6">
          <CardTitle className="text-xl sm:text-2xl font-bold text-primary">
            {getStepTitle()}
          </CardTitle>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            {getStepDescription()}
          </p>
          
          {/* Mobile swipe hint */}
          <div className="sm:hidden mt-2">
            <p className="text-xs text-muted-foreground">
              💡 Swipe left/right to navigate between steps
            </p>
          </div>
          
          {/* Progress Indicator */}
          <div className="mt-4 sm:mt-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold
                    ${currentStep >= step.number 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className="text-xs mt-1 sm:mt-2 text-center hidden sm:block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <Progress 
              value={(currentStep / 4) * 100} 
              className="h-2"
            />
          </div>
        </CardHeader>
        
        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
          {/* Step Content */}
          <div className="min-h-[300px] sm:min-h-[400px]">
            {currentStep === 1 && (
              <BookingStep1
                formData={formData}
                updateFormData={updateFormData}
                errors={errors}
              />
            )}
            
            {currentStep === 2 && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Choose Your Appointment</h3>
                <p className="text-muted-foreground mb-6">
                  Click the button below to open our calendar and select your preferred time.
                </p>
                <Button 
                  onClick={() => {
                    const calendarUrl = bookingInfo[formData.serviceType]
                    window.open(calendarUrl, '_blank')
                  }}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Open Calendar
                </Button>
              </div>
            )}
            
            {currentStep === 3 && (
              <BookingStep3
                formData={formData}
                updateFormData={updateFormData}
                errors={errors}
              />
            )}
            
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Review Your Information</h3>
                  <p className="text-muted-foreground">
                    Please review your details before confirming your booking.
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h4>
                      <p className="text-lg">
                        {formData.serviceType === 'freeQuote' ? 'Free Quote' :
                         formData.serviceType === 'serviceCall' ? 'Service Call ($189)' :
                         'Inspection ($350)'}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Contact</h4>
                      <p className="text-lg">{formData.firstName} {formData.lastName}</p>
                      <p className="text-muted-foreground">{formData.email}</p>
                      <p className="text-muted-foreground">{formData.phone}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Location</h4>
                    <p className="text-lg">
                      {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h4>
                    <p className="text-lg">{formData.description}</p>
                  </div>
                  
                  {formData.referralSource && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">How did you hear about us?</h4>
                      <p className="text-lg">{formData.referralSource}</p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreedToTerms}
                    onChange={(e) => updateFormData({ agreedToTerms: e.target.checked })}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the terms and conditions and understand that this booking will redirect me to our calendar system.
                    {errors.agreedToTerms && (
                      <span className="text-red-500 block mt-1">{errors.agreedToTerms}</span>
                    )}
                  </label>
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-4 sm:pt-6 border-t">
            <Button
              variant="outline"
              onClick={currentStep === 1 ? onCancel : handlePrevious}
              disabled={isLoading}
              className="min-h-[44px] w-full sm:w-auto order-2 sm:order-1"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              {currentStep === 1 ? 'Cancel' : 'Previous'}
            </Button>
            
            <Button
              onClick={currentStep === 4 ? handleSubmit : handleNext}
              disabled={isLoading}
              className="min-h-[44px] w-full sm:w-auto order-1 sm:order-2"
            >
              {isLoading ? (
                'Processing...'
              ) : currentStep === 4 ? (
                'Confirm Booking'
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
