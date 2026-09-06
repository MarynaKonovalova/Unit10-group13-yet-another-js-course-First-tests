import { test as setup, expect } from './fixture';
import { validUser } from './test-data/users';
import { userAuthJsonPath } from './test-data/constants';

setup('authenticate', async ({ app, page }) => {
  await app.loginPage.goto();
  await app.loginPage.login(validUser.email, validUser.password);

  await expect(page).toHaveURL('/account');
  await expect(app.accountPage.header.userMenu).toContainText('Jane Doe');

  await page.context().storageState({ path: userAuthJsonPath });
});
