import { test, expect } from '@playwright/test';

test('should display editor and form correctly on mobile and desktop', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Change this to your deployed URL if necessary

  // Desktop view (side-by-side)
  await page.setViewportSize({ width: 1280, height: 720 });
  await expect(page.locator('text=Enter your JSON schema here...')).toBeVisible();
  await expect(page.locator('text=Submit')).toBeVisible();

  // Mobile view (stacked)
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page.locator('text=Enter your JSON schema here...')).toBeVisible();
  await expect(page.locator('text=Submit')).toBeVisible();
});
