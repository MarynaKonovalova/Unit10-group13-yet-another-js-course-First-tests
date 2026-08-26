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
import { LoginPage } from './pages/LoginPage';
import { AccountPage } from './pages/AccountPage';

test('Verify login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(accountPage.heading).toBeVisible();
    await expect(accountPage.header.userMenu).toContainText('Jane Doe');
});
