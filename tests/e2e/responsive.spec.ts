import { test, expect } from '@playwright/test';

test.describe('Responsive Interface Matrix', () => {
    test.use({ viewport: { width: 375, height: 667 } }); // Mobile configuration

    test('displays floating mobile navigation pill and hides desktop sidebar', async ({ page }) => {
        await page.goto('/');

        // The sticky pill should be visible targeting viewport overlap
        const mobileNav = page.locator('nav.lg\\:hidden');
        await expect(mobileNav).toBeVisible();

        // The desktop block should be CSS-hidden entirely
        const desktopNav = page.locator('nav.hidden.lg\\:block');
        await expect(desktopNav).toBeHidden();
    });
});
