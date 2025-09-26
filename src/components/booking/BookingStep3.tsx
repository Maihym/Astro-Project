import React, { useState, useRef } from 'react'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { AlertCircle, MapPin, Phone, FileText, Users } from 'lucide-react'
import type { BookingFormData } from './HeroBookingForm'

interface BookingStep3Props {
  formData: BookingFormData
  updateFormData: (updates: Partial<BookingFormData>) => void
  errors: Record<string, string>
}

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

export default function BookingStep3({ formData, updateFormData, errors }: BookingStep3Props) {
  const [isGooglePlacesLoaded, setIsGooglePlacesLoaded] = useState(false)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const addressInputRef = useRef<HTMLInputElement>(null)

  // Load Google Places API
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.google && window.google.maps) {
      setIsGooglePlacesLoaded(true)
      initializeAutocomplete()
    } else {
      // Load Google Places API
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_PLACES_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => {
        setIsGooglePlacesLoaded(true)
        initializeAutocomplete()
      }
      document.head.appendChild(script)
    }
  }, [])

  const initializeAutocomplete = () => {
    if (addressInputRef.current && window.google && window.google.maps) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ['address'],
          componentRestrictions: { country: 'us' }
        }
      )

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace()
        if (place && place.formatted_address) {
          const addressComponents = parseAddress(place.formatted_address)
          updateFormData({
            address: addressComponents.address,
            city: addressComponents.city,
            state: addressComponents.state,
            zipCode: addressComponents.zipCode
          })
        }
      })
    }
  }

  const parseAddress = (formattedAddress: string) => {
    // Basic address parsing - in production, you'd want more robust parsing
    const parts = formattedAddress.split(', ')
    const address = parts[0] || ''
    const cityStateZip = parts[1] || ''
    const [city, stateZip] = cityStateZip.split(' ')
    const [state, zipCode] = stateZip ? stateZip.split(' ') : ['', '']
    
    return {
      address,
      city: city || '',
      state: state || 'CA',
      zipCode: zipCode || ''
    }
  }

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    updateFormData({ [field]: value })
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '')
    
    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length >= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    } else if (phoneNumber.length >= 3) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else if (phoneNumber.length > 0) {
      return `(${phoneNumber}`
    }
    return phoneNumber
  }

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value)
    updateFormData({ phone: formatted })
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Contact Information */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Contact Information
        </h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="(555) 123-4567"
              className={errors.phone ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.phone && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.phone}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Service Location
        </h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium">
              Street Address *
            </Label>
            <Input
              ref={addressInputRef}
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Enter your street address"
              className={errors.address ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.address && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.address}</span>
              </div>
            )}
            {isGooglePlacesLoaded && (
              <p className="text-xs text-muted-foreground">
                Start typing your address for autocomplete suggestions
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium">
                City *
              </Label>
              <Input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Enter city"
                className={errors.city ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.city && (
                <div className="flex items-center space-x-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.city}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="state" className="text-sm font-medium">
                State *
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) => handleInputChange('state', value)}
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
                <div className="flex items-center space-x-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.state}</span>
                </div>
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
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                placeholder="12345"
                maxLength={5}
                className={errors.zipCode ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.zipCode && (
                <div className="flex items-center space-x-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.zipCode}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Service Details
        </h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Describe your electrical needs *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Please describe the electrical work you need. Include details about the problem, location, and any specific requirements."
              rows={4}
              className={errors.description ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.description && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.description}</span>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              The more details you provide, the better we can prepare for your appointment.
            </p>
          </div>
        </div>
      </div>

      {/* Referral Source */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          How did you hear about us?
        </h3>
        
        <div className="space-y-2">
          <Label htmlFor="referralSource" className="text-sm font-medium">
            Referral Source (Optional)
          </Label>
          <Select
            value={formData.referralSource}
            onValueChange={(value) => handleInputChange('referralSource', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select how you heard about us" />
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

      {/* Service Area Information */}
      <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <h4 className="font-semibold mb-2 text-sm sm:text-base">Service Area</h4>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3">
          We proudly serve these cities and surrounding areas:
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {commonCities.map((city) => (
            <span
              key={city}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
