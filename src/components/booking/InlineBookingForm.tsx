import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardContent } from '../ui/card'
import { Zap, ArrowRight } from 'lucide-react'

interface InlineBookingFormProps {
  onStartBooking: (data: { firstName: string; lastName: string; email: string }) => void
  className?: string
  variant?: 'hero' | 'card' | 'minimal'
  serviceType?: 'freeQuote' | 'serviceCall' | 'inspection'
}

export default function InlineBookingForm({ 
  onStartBooking, 
  className = '',
  variant = 'hero',
  serviceType = 'freeQuote'
}: InlineBookingFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!firstName.trim()) newErrors.firstName = 'First name is required'
    if (!lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      // Simulate a brief delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500))
      
      onStartBooking({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim()
      })
    } catch (error) {
      console.error('Error starting booking:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getServiceText = () => {
    switch (serviceType) {
      case 'freeQuote': return 'Get Your Free Quote'
      case 'serviceCall': return 'Schedule Service Call'
      case 'inspection': return 'Schedule Inspection'
      default: return 'Start Booking'
    }
  }

  const getServiceDescription = () => {
    switch (serviceType) {
      case 'freeQuote': return 'Tell us about your electrical project and we\'ll provide a detailed estimate.'
      case 'serviceCall': return 'Schedule a service appointment for your electrical needs.'
      case 'inspection': return 'Book a comprehensive electrical system inspection.'
      default: return 'Get started with your electrical service booking.'
    }
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`flex-1 ${errors.firstName ? 'border-red-500' : ''}`}
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`flex-1 ${errors.lastName ? 'border-red-500' : ''}`}
          />
        </div>
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? 'border-red-500' : ''}
        />
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Starting...' : getServiceText()}
        </Button>
        {Object.values(errors).length > 0 && (
          <div className="text-sm text-red-500">
            {Object.values(errors)[0]}
          </div>
        )}
      </form>
    )
  }

  if (variant === 'card') {
    return (
      <Card className={className}>
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{getServiceText()}</h3>
            <p className="text-sm text-muted-foreground">{getServiceDescription()}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={errors.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
            
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Starting...' : (
                <>
                  {getServiceText()}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

  // Hero variant (default)
  return (
    <div className={`text-center ${className}`}>
      <div className="mb-6">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{getServiceText()}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {getServiceDescription()}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-left block mb-2">
              First Name *
            </Label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={errors.firstName ? 'border-red-500' : ''}
              data-testid="first-name"
            />
            {errors.firstName && (
              <p className="text-sm text-red-500 mt-1 text-left" data-testid="first-name-error">{errors.firstName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-left block mb-2">
              Last Name *
            </Label>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={errors.lastName ? 'border-red-500' : ''}
              data-testid="last-name"
            />
            {errors.lastName && (
              <p className="text-sm text-red-500 mt-1 text-left" data-testid="last-name-error">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-left block mb-2">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'border-red-500' : ''}
            data-testid="email"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1 text-left" data-testid="email-error">{errors.email}</p>
          )}
        </div>
        
        <Button type="submit" disabled={isLoading} size="lg" className="w-full" data-testid="hero-submit">
          {isLoading ? 'Starting...' : (
            <>
              {getServiceText()}
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
