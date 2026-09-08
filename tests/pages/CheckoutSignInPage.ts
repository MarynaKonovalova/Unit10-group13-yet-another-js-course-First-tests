import { Page, Locator } from '@playwright/test';

export class CheckoutSignInPage {
    readonly page: Page;
    readonly alreadyLoggedInMessage: Locator;
    readonly proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alreadyLoggedInMessage = page.getByText('you are already logged in');
        this.proceedToCheckoutButton = page.getByTestId('proceed-2');
    }
}
