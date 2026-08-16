import { test, expect } from '@playwright/test';

test.describe('Navigation End-To-End', () => {
    test('scrolls to experience section and verifies URL fragment', async ({ page }) => {
        await page.goto('/');

        // Check main title rendering from JSON
        await expect(page.locator('h1').first()).toContainText('Felipe Peñaloza');

        // Click "experiencia" in navigation using explicitly visible nodes
        const navLink = page.locator('nav a[href="/#experiencia"]:visible').first();
        await navLink.click();

        // Verify URL fragment anchors securely
        await expect(page).toHaveURL(/.*#experiencia/);
    });
});
