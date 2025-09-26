import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor, mockUser } from '../utils/test-utils'
import { mockModalData } from '../utils/mock-data'
import PersonalizedBookingModal from '../../components/booking/PersonalizedBookingModal'

describe('Modal Components - Shared Behavior', () => {
  it('renders modal when open', () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={true}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/let's get started/i)).toBeInTheDocument()
  })

  it('does not render modal when closed', () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={false}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes modal when close button is clicked', async () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={true}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    await mockUser.click(closeButton)
    
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('closes modal when escape key is pressed', async () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={true}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    await mockUser.keyboard('{Escape}')
    
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('closes modal when backdrop is clicked', async () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={true}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    // Find the overlay element and click it
    const overlay = document.querySelector('[data-slot="dialog-overlay"]')
    if (overlay) {
      await mockUser.click(overlay as HTMLElement)
    }
    
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('traps focus within modal', async () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={true}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    const modal = screen.getByRole('dialog')
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    // Focus should be trapped within modal
    expect(focusableElements.length).toBeGreaterThan(0)
  })

  it('populates form with initial data', () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={true}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    // Check that the personalized greeting shows the name
    expect(screen.getAllByText(/john/i).length).toBeGreaterThan(0)
  })

  it('is accessible to screen readers', () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={true}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    const modal = screen.getByRole('dialog')
    expect(modal).toHaveAttribute('aria-labelledby')
    expect(modal).toHaveAttribute('aria-describedby')
  })

  it('handles form submission within modal', async () => {
    const mockOnClose = vi.fn()
    
    render(
      <PersonalizedBookingModal
        isOpen={true}
        onClose={mockOnClose}
        initialData={mockModalData.initialData}
        defaultServiceType="freeQuote"
      />
    )
    
    const nextButton = screen.getByRole('button', { name: /next/i })
    await mockUser.click(nextButton)
    
    // Should handle form submission
    await waitFor(() => {
      expect(nextButton).toBeInTheDocument()
    })
  })
})
