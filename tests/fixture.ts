import { test as base } from '@playwright/test';
import { App } from './App';
import { validUser } from './test-data/users';

type Fixtures = {
    app: App;
    loggedInApp: App;
};

export const test = base.extend<Fixtures>({
    app: async ({ page }, use) => {
        const app = new App(page);
        await use(app);
    },

    loggedInApp: async ({ app, page }, use) => {
        await app.loginPage.goto();
        await app.loginPage.login(validUser.email, validUser.password);
        await page.waitForURL('/account');

        await use(app);
    },
});

export { expect } from '@playwright/test';
