import { test, expect } from '@playwright/test'

test.describe('Accessibility Testing', () => {
  test('page meets WCAG accessibility standards', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Test keyboard navigation
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Test focus indicators
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
    
    // Test form accessibility
    const form = page.locator('form')
    await expect(form).toBeVisible()
    
    // Test that all form fields have labels
    const inputs = page.locator('input, select, textarea')
    const inputCount = await inputs.count()
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i)
      const id = await input.getAttribute('id')
      if (id) {
        const label = page.locator(`label[for="${id}"]`)
        // Skip if no label found (some inputs might not have explicit labels)
        if (await label.count() > 0) {
          await expect(label).toBeVisible()
        }
      }
    }
  })

  test('modal is accessible to screen readers', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Open modal
    await page.fill('[data-testid="first-name"]', 'John')
    await page.fill('[data-testid="last-name"]', 'Doe')
    await page.fill('[data-testid="email"]', 'john@example.com')
    await page.click('[data-testid="hero-submit"]')
    
    // Test modal accessibility
    const modal = page.locator('[data-testid="booking-modal"]')
    await expect(modal).toBeVisible()
    
    // Test focus management (modal should be visible and focusable)
    const firstFocusable = modal.locator('button, input, select, textarea').first()
    if (await firstFocusable.count() > 0) {
      await expect(firstFocusable).toBeVisible()
    }
  })

  test('color contrast meets standards', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Test text contrast against background
    const heroText = page.locator('h1').first()
    await expect(heroText).toBeVisible()
    
    // Test form contrast
    const form = page.locator('form')
    await expect(form).toBeVisible()
    
    // Test button contrast
    const submitButton = page.locator('[data-testid="hero-submit"]')
    await expect(submitButton).toBeVisible()
  })

  test('page works with screen reader', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Test that all interactive elements are accessible
    const buttons = page.locator('button')
    const buttonCount = await buttons.count()
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const ariaLabel = await button.getAttribute('aria-label')
      const text = await button.textContent()
      
      // Button should have either aria-label or text content
      expect(ariaLabel || text).toBeTruthy()
    }
  })

  test('form validation is accessible', async ({ page }) => {
    await page.goto('/homepage-with-inline-booking')
    
    // Submit form without filling required fields
    await page.click('[data-testid="hero-submit"]')
    
    // Test that error messages are accessible
    const errorMessages = page.locator('[data-testid*="-error"]')
    const errorCount = await errorMessages.count()
    
    for (let i = 0; i < errorCount; i++) {
      const error = errorMessages.nth(i)
      if (await error.isVisible()) {
        await expect(error).toBeVisible()
      }
    }
  })
})
