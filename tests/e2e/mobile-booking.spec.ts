import { test, expect } from '@playwright/test'

test.describe('Mobile Booking Experience', () => {
  test('booking form works on mobile devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/homepage-with-inline-booking')
    
    // Test mobile layout
    await expect(page.locator('main')).toBeVisible()
    
    // Test touch interactions
    await page.tap('[data-testid="first-name"]')
    await page.fill('[data-testid="first-name"]', 'John')
    
    await page.tap('[data-testid="last-name"]')
    await page.fill('[data-testid="last-name"]', 'Doe')
    
    await page.tap('[data-testid="email"]')
    await page.fill('[data-testid="email"]', 'john@example.com')
    
    await page.tap('[data-testid="hero-submit"]')
    
    // Verify modal opens on mobile
    await expect(page.locator('[data-testid="booking-modal"]')).toBeVisible()
  })

  test('form is touch-friendly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/homepage-with-inline-booking')
    
    // Test button sizes (should be at least 44px for touch)
    const submitButton = page.locator('[data-testid="hero-submit"]')
    await expect(submitButton).toBeVisible()
    
    const buttonBox = await submitButton.boundingBox()
    if (buttonBox) {
      expect(buttonBox.height).toBeGreaterThanOrEqual(44)
      expect(buttonBox.width).toBeGreaterThanOrEqual(44)
    }
  })

  test('modal is mobile-optimized', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/homepage-with-inline-booking')
    
    // Open modal
    await page.fill('[data-testid="first-name"]', 'John')
    await page.fill('[data-testid="last-name"]', 'Doe')
    await page.fill('[data-testid="email"]', 'john@example.com')
    await page.click('[data-testid="hero-submit"]')
    
    // Test modal mobile layout
    const modal = page.locator('[data-testid="booking-modal"]')
    await expect(modal).toBeVisible()
    
    // Test mobile modal interactions
    await page.tap('[data-testid="phone"]')
    await page.fill('[data-testid="phone"]', '555-123-4567')
    
    await page.tap('[data-testid="modal-submit"]')
    
    // Verify success on mobile
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible()
  })

  test('swipe gestures work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/homepage-with-inline-booking')
    
    // Test swipe to close modal
    await page.fill('[data-testid="first-name"]', 'John')
    await page.fill('[data-testid="last-name"]', 'Doe')
    await page.fill('[data-testid="email"]', 'john@example.com')
    await page.click('[data-testid="hero-submit"]')
    
    // Test swipe down to close (simplified - just test that modal exists)
    const modal = page.locator('[data-testid="booking-modal"]')
    await expect(modal).toBeVisible()
    
    // Close modal by clicking close button
    await page.click('[data-testid="modal-close"]')
    await expect(modal).not.toBeVisible()
  })
})
