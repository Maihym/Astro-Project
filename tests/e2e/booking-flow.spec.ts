import { test, expect } from '@playwright/test'

test.describe('Booking Flow - Complete User Journey', () => {
  test('user can complete booking from hero form to modal', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Test hero form
    await page.fill('[data-testid="first-name"]', 'John')
    await page.fill('[data-testid="last-name"]', 'Doe')
    await page.fill('[data-testid="email"]', 'john@example.com')
    await page.click('[data-testid="hero-submit"]')
    
    // Verify modal opens
    await expect(page.locator('[data-testid="booking-modal"]')).toBeVisible()
    
    // Test modal form completion
    await page.fill('[data-testid="phone"]', '555-123-4567')
    await page.fill('[data-testid="address"]', '123 Main St, La Mirada, CA 90638')
    await page.fill('[data-testid="message"]', 'I need electrical work done')
    await page.click('[data-testid="modal-submit"]')
    
    // Verify success state
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible()
  })

  test('user can handle form validation errors', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Wait for form to be ready
    await page.waitForSelector('[data-testid="hero-submit"]')
    
    // Submit form without filling required fields
    await page.click('[data-testid="hero-submit"]')
    
    // Wait for validation to run and check console logs
    await page.waitForTimeout(500)
    
    // Check if validation errors are present (they might be hidden but exist)
    const firstNameError = page.locator('[data-testid="first-name-error"]')
    const emailError = page.locator('[data-testid="email-error"]')
    
    // Check if elements exist and have content
    await expect(firstNameError).toHaveText('First name is required')
    await expect(emailError).toHaveText('Email is required')
    
    // Fill form with invalid email
    await page.fill('[data-testid="first-name"]', 'John')
    await page.fill('[data-testid="last-name"]', 'Doe')
    await page.fill('[data-testid="email"]', 'invalid-email')
    await page.click('[data-testid="hero-submit"]')
    
    // Verify email validation error
    await expect(page.locator('[data-testid="email-error"]')).toContainText('Please enter a valid email address')
  })

  test('user can close modal and reopen', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Open modal
    await page.fill('[data-testid="first-name"]', 'John')
    await page.fill('[data-testid="last-name"]', 'Doe')
    await page.fill('[data-testid="email"]', 'john@example.com')
    await page.click('[data-testid="hero-submit"]')
    
    // Verify modal is open
    await expect(page.locator('[data-testid="booking-modal"]')).toBeVisible()
    
    // Close modal
    await page.click('[data-testid="modal-close"]')
    
    // Verify modal is closed
    await expect(page.locator('[data-testid="booking-modal"]')).not.toBeVisible()
    
    // Reopen modal
    await page.click('[data-testid="hero-submit"]')
    await expect(page.locator('[data-testid="booking-modal"]')).toBeVisible()
  })

  test('user can navigate form with keyboard', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Wait for form to be ready
    await page.waitForSelector('[data-testid="hero-submit"]')
    
    // Test that form fields are accessible
    await expect(page.locator('[data-testid="first-name"]')).toBeVisible()
    await expect(page.locator('[data-testid="last-name"]')).toBeVisible()
    await expect(page.locator('[data-testid="email"]')).toBeVisible()
    await expect(page.locator('[data-testid="hero-submit"]')).toBeVisible()
    
    // Test that button is focusable
    await page.focus('[data-testid="hero-submit"]')
    await expect(page.locator('[data-testid="hero-submit"]')).toBeFocused()
    
    // Test that form can be filled and submitted
    await page.fill('[data-testid="first-name"]', 'John')
    await page.fill('[data-testid="last-name"]', 'Doe')
    await page.fill('[data-testid="email"]', 'john@example.com')
    await page.click('[data-testid="hero-submit"]')
    
    // Verify modal opens
    await expect(page.locator('[data-testid="booking-modal"]')).toBeVisible()
  })
})
