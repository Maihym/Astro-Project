import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Progress } from '../ui/progress'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { ChevronLeft, ChevronRight, CheckCircle, Calendar, MapPin, Phone, FileText, Users, Zap, Wrench, Search } from 'lucide-react'
import { getBookingInfo } from '../../config/business'

interface PersonalizedBookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialData: {
    firstName: string
    lastName: string
    email: string
  }
  defaultServiceType?: 'freeQuote' | 'serviceCall' | 'inspection'
}

interface BookingFormData {
  // Pre-filled from initial data
  firstName: string
  lastName: string
  email: string
  
  // Service selection
  serviceType: 'freeQuote' | 'serviceCall' | 'inspection'
  
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

const serviceOptions = [
  {
    id: 'freeQuote' as const,
    title: 'Free Quote',
    description: 'Get a detailed estimate for your electrical project',
    price: 'Free',
    icon: <Zap className="w-5 h-5" />,
    features: ['Detailed project assessment', 'Transparent pricing', 'No obligation']
  },
  {
    id: 'serviceCall' as const,
    title: 'Service Call',
    description: 'Schedule a service appointment for electrical repairs',
    price: '$189',
    icon: <Wrench className="w-5 h-5" />,
    features: ['Diagnostic service', 'Repair estimates', 'Professional service']
  },
  {
    id: 'inspection' as const,
    title: 'Electrical Inspection',
    description: 'Comprehensive electrical system inspection and safety check',
    price: '$350',
    icon: <Search className="w-5 h-5" />,
    features: ['Full system inspection', 'Safety compliance check', 'Detailed report']
  }
]

const referralSources = [
  'Google Search',
  'Google Maps',
  'Facebook',
  'Instagram',
  'Yelp',
  'Referral from friend/family',
  'Previous customer',
  'Other'
]

const commonCities = [
  'La Mirada',
  'Whittier', 
  'Cerritos',
  'Norwalk',
  'Santa Fe Springs',
  'Pico Rivera',
  'Montebello',
  'Bellflower',
  'Downey',
  'Buena Park'
]

export default function PersonalizedBookingModal({
  isOpen,
  onClose,
  initialData,
  defaultServiceType = 'freeQuote'
}: PersonalizedBookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: initialData.firstName,
    lastName: initialData.lastName,
    email: initialData.email,
    serviceType: defaultServiceType,
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
  
  const bookingInfo = getBookingInfo()
  
  const steps = [
    { number: 1, title: 'Service', icon: '⚡' },
    { number: 2, title: 'Schedule', icon: '📅' },
    { number: 3, title: 'Details', icon: '📍' },
    { number: 4, title: 'Review', icon: '✅' }
  ]
  
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    
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
      // Call completion handler
      console.log('Booking completed:', formData)
      
      // Redirect to appropriate calendar
      const calendarUrl = bookingInfo[formData.serviceType]
      window.open(calendarUrl, '_blank')
      
      // Close modal
      onClose()
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
  
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '')
    
    if (phoneNumber.length >= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    } else if (phoneNumber.length >= 3) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else if (phoneNumber.length > 0) {
      return `(${phoneNumber}`
    }
    return phoneNumber
  }
  
  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return `Hi ${formData.firstName}! Let's get started`
      case 2: return 'Choose Your Appointment Time'
      case 3: return 'Tell us about your electrical needs'
      case 4: return 'Review & Confirm'
      default: return 'Booking Form'
    }
  }
  
  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return 'Select the service you need and we\'ll get you scheduled right away.'
      case 2: return 'Pick a convenient time for your appointment'
      case 3: return 'Help us understand your electrical needs and location'
      case 4: return 'Review your information and confirm your booking'
      default: return ''
    }
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl h-[90vh] max-h-[800px] p-0" data-testid="booking-modal">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl font-bold text-primary">
            {getStepTitle()}
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            {getStepDescription()}
          </p>
          
          {/* Progress Indicator */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-3">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold
                    ${currentStep >= step.number 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className="text-xs mt-1 text-center hidden sm:block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <Progress value={(currentStep / 4) * 100} className="h-2" />
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Step Content */}
          <div className="min-h-[400px]">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-lg text-muted-foreground">
                    Thanks for getting started, {formData.firstName}! What electrical service do you need?
                  </p>
                </div>
                
                <RadioGroup
                  value={formData.serviceType}
                  onValueChange={(value) => updateFormData({ serviceType: value as BookingFormData['serviceType'] })}
                  className="space-y-3"
                >
                  {serviceOptions.map((option) => (
                    <div key={option.id} className="relative">
                      <label className="block">
                        <Card className={`
                          cursor-pointer transition-all duration-200 hover:shadow-md
                          ${formData.serviceType === option.id 
                            ? 'ring-2 ring-primary border-primary' 
                            : 'hover:border-primary/50'
                          }
                        `}>
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                              <div className={`
                                flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
                                ${formData.serviceType === option.id 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-muted text-muted-foreground'
                                }
                              `}>
                                {option.icon}
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-lg font-semibold">{option.title}</h4>
                                  <span className={`
                                    text-lg font-bold
                                    ${formData.serviceType === option.id ? 'text-primary' : 'text-muted-foreground'}
                                  `}>
                                    {option.price}
                                  </span>
                                </div>
                                
                                <p className="text-muted-foreground mb-3">
                                  {option.description}
                                </p>
                                
                                <div className="space-y-1">
                                  {option.features.map((feature, index) => (
                                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                                      {feature}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="flex-shrink-0">
                                <RadioGroupItem value={option.id} id={option.id} className="w-5 h-5" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Choose Your Appointment, {formData.firstName}</h3>
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
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-lg text-muted-foreground">
                    Almost done, {formData.firstName}! Just a few more details to complete your booking.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData({ phone: formatPhoneNumber(e.target.value) })}
                      placeholder="(555) 123-4567"
                      className={errors.phone ? 'border-red-500' : ''}
                      data-testid="phone"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium">
                      Street Address *
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      value={formData.address}
                      onChange={(e) => updateFormData({ address: e.target.value })}
                      placeholder="Enter your street address"
                      className={errors.address ? 'border-red-500' : ''}
                      data-testid="address"
                    />
                    {errors.address && (
                      <p className="text-sm text-red-500">{errors.address}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium">
                        City *
                      </Label>
                      <Input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => updateFormData({ city: e.target.value })}
                        placeholder="Enter city"
                        className={errors.city ? 'border-red-500' : ''}
                      />
                      {errors.city && (
                        <p className="text-sm text-red-500">{errors.city}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-medium">
                        State *
                      </Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) => updateFormData({ state: value })}
                      >
                        <SelectTrigger className={errors.state ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="NV">Nevada</SelectItem>
                          <SelectItem value="AZ">Arizona</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.state && (
                        <p className="text-sm text-red-500">{errors.state}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zipCode" className="text-sm font-medium">
                        ZIP Code *
                      </Label>
                      <Input
                        id="zipCode"
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => updateFormData({ zipCode: e.target.value })}
                        placeholder="12345"
                        maxLength={5}
                        className={errors.zipCode ? 'border-red-500' : ''}
                      />
                      {errors.zipCode && (
                        <p className="text-sm text-red-500">{errors.zipCode}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium">
                      Describe your electrical needs *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => updateFormData({ description: e.target.value })}
                      placeholder="Please describe the electrical work you need. Include details about the problem, location, and any specific requirements."
                      rows={4}
                      className={errors.description ? 'border-red-500' : ''}
                      data-testid="message"
                    />
                    {errors.description && (
                      <p className="text-sm text-red-500">{errors.description}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="referralSource" className="text-sm font-medium">
                      How did you hear about us? (Optional)
                    </Label>
                    <Select
                      value={formData.referralSource}
                      onValueChange={(value) => updateFormData({ referralSource: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select referral source" />
                      </SelectTrigger>
                      <SelectContent>
                        {referralSources.map((source) => (
                          <SelectItem key={source} value={source}>
                            {source}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Review Your Information, {formData.firstName}</h3>
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
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={currentStep === 1 ? onClose : handlePrevious}
              disabled={isLoading}
              className="min-h-[44px]"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              {currentStep === 1 ? 'Cancel' : 'Previous'}
            </Button>
            
            <Button
              onClick={currentStep === 4 ? handleSubmit : handleNext}
              disabled={isLoading}
              className="min-h-[44px]"
              data-testid="modal-submit"
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
        </div>
      </DialogContent>
    </Dialog>
  )
}
