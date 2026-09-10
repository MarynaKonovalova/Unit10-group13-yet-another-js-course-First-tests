import { test as base, expect } from '@playwright/test';
import { App } from './App';
import { validUser } from './test-data/users';
import { apiBaseURL } from './test-data/constants';

type Fixtures = {
    app: App;
    loggedInApp: App;
};

export const test = base.extend<Fixtures>({
    app: async ({ page }, use) => {
        const app = new App(page);
        await use(app);
    },

    loggedInApp: async ({ app, page, request }, use) => {
        const response = await request.post(`${apiBaseURL}/users/login`, {
            data: { email: validUser.email, password: validUser.password },
        });
        await expect(response).toBeOK();

        const { access_token: authToken } = await response.json();

        await page.addInitScript((token) => {
            window.localStorage.setItem('auth-token', token);
        }, authToken);

        await use(app);
    },
});

export { expect } from '@playwright/test';
