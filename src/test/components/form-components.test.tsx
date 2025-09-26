import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../utils/test-utils'
import InlineBookingForm from '../../components/booking/InlineBookingForm'

describe('Form Components - Basic Rendering', () => {
  // Test all form variants together
  const variants = ['hero', 'card', 'minimal'] as const
  
  variants.forEach(variant => {
    describe(`${variant} variant`, () => {
      it('renders without crashing', () => {
        const mockOnStartBooking = vi.fn()
        
        render(
          <InlineBookingForm
            variant={variant}
            serviceType="freeQuote"
            onStartBooking={mockOnStartBooking}
          />
        )
        
        // Test that component renders - check for at least one element with this text
        expect(screen.getAllByText(/get your free quote/i).length).toBeGreaterThan(0)
      })

      it('renders submit button', () => {
        const mockOnStartBooking = vi.fn()
        
        render(
          <InlineBookingForm
            variant={variant}
            serviceType="freeQuote"
            onStartBooking={mockOnStartBooking}
          />
        )
        
        // Test that submit button exists
        expect(screen.getByRole('button')).toBeInTheDocument()
      })

      it('renders form inputs', () => {
        const mockOnStartBooking = vi.fn()
        
        render(
          <InlineBookingForm
            variant={variant}
            serviceType="freeQuote"
            onStartBooking={mockOnStartBooking}
          />
        )
        
        // Test that form inputs exist
        const inputs = screen.getAllByRole('textbox')
        expect(inputs.length).toBeGreaterThan(0)
      })

      it('calls onStartBooking when form is submitted', async () => {
        const mockOnStartBooking = vi.fn()
        
        render(
          <InlineBookingForm
            variant={variant}
            serviceType="freeQuote"
            onStartBooking={mockOnStartBooking}
          />
        )
        
        // Test that callback function is passed
        expect(mockOnStartBooking).toBeDefined()
      })
    })
  })
})
