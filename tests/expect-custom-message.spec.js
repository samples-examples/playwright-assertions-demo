const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Custom expect message test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    await expect(page.getByText(/Top Trending Categories/i), 'top category should be visible').toBeVisible();
});