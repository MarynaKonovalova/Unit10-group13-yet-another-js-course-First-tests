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


import { test, expect } from './fixture';
import { validUser } from './test-data/users';
import { userAuthJsonPath } from './test-data/constants';

test.use({ storageState: userAuthJsonPath });

test('Verify login with valid credentials', async ({ app, page }) => {
    await app.loginPage.goto();
    await app.loginPage.login(validUser.email, validUser.password);

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(app.accountPage.heading).toBeVisible();
    await expect(app.accountPage.header.userMenu).toContainText('Jane Doe');
});
