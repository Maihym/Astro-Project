import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'next-themes'

// Mock data for testing
export const mockBookingData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '555-123-4567',
  address: '123 Main St, La Mirada, CA 90638',
  serviceType: 'freeQuote' as const,
  message: 'I need electrical work done'
}

export const mockUser = userEvent.setup()

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything
export * from '@testing-library/react'
export { customRender as render }

// Form testing utilities
export const expectFormValidation = async (
  user: typeof mockUser,
  form: HTMLElement,
  requiredFields: string[]
) => {
  const submitButton = form.querySelector('button[type="submit"]')
  if (submitButton) {
    await user.click(submitButton)
    
    for (const field of requiredFields) {
      const errorMessage = form.querySelector(`[data-testid="${field}-error"]`)
      expect(errorMessage).toBeInTheDocument()
    }
  }
}

// Modal testing utilities
export const expectModalToOpen = async (modal: HTMLElement) => {
  expect(modal).toBeVisible()
  expect(modal).toHaveAttribute('data-state', 'open')
}

export const expectModalToClose = async (modal: HTMLElement) => {
  expect(modal).not.toBeVisible()
}

// Accessibility testing utilities
export const expectAccessibleForm = (form: HTMLElement) => {
  const inputs = form.querySelectorAll('input, select, textarea')
  inputs.forEach(input => {
    const label = form.querySelector(`label[for="${input.id}"]`)
    expect(label).toBeInTheDocument()
  })
}

// Visual testing utilities
export const expectResponsiveLayout = (container: HTMLElement, breakpoint: string) => {
  const grid = container.querySelector('.grid')
  if (grid) {
    expect(grid).toHaveClass(`grid-cols-${breakpoint === 'mobile' ? '1' : '2'}`)
  }
}
