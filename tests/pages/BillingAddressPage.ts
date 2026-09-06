import { Page, Locator } from '@playwright/test';

export type MissingBillingFields = {
    country: string;
    postalCode: string;
    houseNumber: string;
    state: string;
};

export class BillingAddressPage {
    readonly page: Page;
    readonly country: Locator;
    readonly postalCode: Locator;
    readonly houseNumber: Locator;
    readonly street: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.country = page.getByTestId('country');
        this.postalCode = page.getByTestId('postal_code');
        this.houseNumber = page.getByTestId('house_number');
        this.street = page.getByTestId('street');
        this.city = page.getByTestId('city');
        this.state = page.getByTestId('state');
        this.proceedToCheckoutButton = page.getByTestId('proceed-3');
    }

    async fillMissingFields({ country, postalCode, houseNumber, state }: MissingBillingFields) {
        await this.country.selectOption({ label: country });
        await this.postalCode.fill(postalCode);
        await this.houseNumber.fill(houseNumber);
        await this.state.fill(state);
    }
}
