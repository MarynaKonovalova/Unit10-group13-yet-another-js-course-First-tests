import { test as setup, expect } from '@playwright/test';
import { validUser } from './test-data/users';
import { userAuthJsonPath } from './test-data/constants';
import { LoginPage } from './pages/LoginPage';
import { AccountPage } from './pages/AccountPage';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await loginPage.goto();
  await loginPage.login(validUser.email, validUser.password);

  await expect(page).toHaveURL('/account');
  await expect(accountPage.header.userMenu).toContainText('Jane Doe');

  await page.context().storageState({ path: userAuthJsonPath });
});
