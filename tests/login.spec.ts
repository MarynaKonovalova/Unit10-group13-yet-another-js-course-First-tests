/* Test 1: Verify login with valid credentials
Steps:

Open URL: https://practicesoftwaretesting.com/auth/login.
Fill in credentials:
Email: customer@practicesoftwaretesting.com
Password: welcome01
Click the Login button.
Assertions:

Verify URL is https://practicesoftwaretesting.com/account.
Verify page title is "My Account".
Verify username "Jane Doe" appears in the navigation bar.
*/


import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
    await page.locator('[data-test="password"]').fill('welcome01');
    await page.locator('[data-test="login-submit"]').click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
    await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
});
