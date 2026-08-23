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
import { validUser } from './test-data/users';

test('Verify login with valid credentials', async ({ page }) => {
    await page.goto('/auth/login');
    await page.getByTestId('email').fill(validUser.email);
    await page.getByTestId('password').fill(validUser.password);
    await page.getByTestId('login-submit').click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
    await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe');
});
