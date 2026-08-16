import { test, expect } from '@playwright/test';

test.describe('Internationalization (i18n)', () => {
    test('reliably switches site locale between ES and EN', async ({ page }) => {
        await page.goto('/');

        // Assert Spanish static string
        await expect(page.locator('h2').filter({ hasText: 'Sobre mí' }).first()).toBeVisible();

        // Trigger the Language Translation Switch using explicit geometry-visible DOM nodes
        let langButton = page.locator('a[href="/en"]:visible').first();
        await langButton.click();

        // Expect Astro routes to jump to the /en/ scope
        await expect(page).toHaveURL(/.*\/en/);

        // Verify English payload parsed natively
        await expect(page.locator('h2').filter({ hasText: 'About me' }).first()).toBeVisible();

        // Hop back to ES
        langButton = page.locator('a[href="/"]:visible').first();
        await langButton.click();
        await expect(page).toHaveURL(/.*\//);
    });
});
