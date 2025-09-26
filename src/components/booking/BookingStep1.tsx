import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { AlertCircle, Zap, Wrench, Search } from 'lucide-react'
import type { BookingFormData } from './HeroBookingForm'

interface BookingStep1Props {
  formData: BookingFormData
  updateFormData: (updates: Partial<BookingFormData>) => void
  errors: Record<string, string>
}

const serviceOptions = [
  {
    id: 'freeQuote' as const,
    title: 'Free Quote',
    description: 'Get a detailed estimate for your electrical project',
    price: 'Free',
    icon: <Zap className="w-6 h-6" />,
    features: ['Detailed project assessment', 'Transparent pricing', 'No obligation']
  },
  {
    id: 'serviceCall' as const,
    title: 'Service Call',
    description: 'Schedule a service appointment for electrical repairs',
    price: '$189',
    icon: <Wrench className="w-6 h-6" />,
    features: ['Diagnostic service', 'Repair estimates', 'Professional service']
  },
  {
    id: 'inspection' as const,
    title: 'Electrical Inspection',
    description: 'Comprehensive electrical system inspection and safety check',
    price: '$350',
    icon: <Search className="w-6 h-6" />,
    features: ['Full system inspection', 'Safety compliance check', 'Detailed report']
  }
]

export default function BookingStep1({ formData, updateFormData, errors }: BookingStep1Props) {
  const handleServiceChange = (value: string) => {
    updateFormData({ serviceType: value as BookingFormData['serviceType'] })
  }

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    updateFormData({ [field]: value })
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Service Selection */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">What service do you need?</h3>
        <RadioGroup
          value={formData.serviceType}
          onValueChange={handleServiceChange}
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
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`
                        flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center
                        ${formData.serviceType === option.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                        }
                      `}>
                        {option.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base sm:text-lg font-semibold">{option.title}</h4>
                          <span className={`
                            text-base sm:text-lg font-bold
                            ${formData.serviceType === option.id ? 'text-primary' : 'text-muted-foreground'}
                          `}>
                            {option.price}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-2 sm:mb-3 text-sm sm:text-base">
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
                        <RadioGroupItem 
                          value={option.id} 
                          id={option.id}
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Basic Information */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-semibold">Your Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium">
              First Name *
            </Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="Enter your first name"
              className={errors.firstName ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.firstName && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.firstName}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium">
              Last Name *
            </Label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="Enter your last name"
              className={errors.lastName ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.lastName && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.lastName}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Enter your email address"
            className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
          />
          {errors.email && (
            <div className="flex items-center space-x-1 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>
      </div>

      {/* Service Information */}
      <div className="bg-muted/50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">What to expect:</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          {formData.serviceType === 'freeQuote' && (
            <>
              <p>• We'll assess your electrical needs and provide a detailed estimate</p>
              <p>• No obligation to proceed with the work</p>
              <p>• Transparent pricing with no hidden fees</p>
            </>
          )}
          {formData.serviceType === 'serviceCall' && (
            <>
              <p>• Professional diagnostic service to identify electrical issues</p>
              <p>• Repair estimates and recommendations</p>
              <p>• Same-day service available for urgent repairs</p>
            </>
          )}
          {formData.serviceType === 'inspection' && (
            <>
              <p>• Comprehensive electrical system safety inspection</p>
              <p>• Detailed report with findings and recommendations</p>
              <p>• Code compliance verification</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
