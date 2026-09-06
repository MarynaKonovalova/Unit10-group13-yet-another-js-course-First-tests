import { Page, Locator } from '@playwright/test';

export type CreditCardDetails = {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    cardHolderName: string;
};

export class PaymentPage {
    readonly page: Page;
    readonly paymentMethodDropdown: Locator;
    readonly cardNumberInput: Locator;
    readonly expirationDateInput: Locator;
    readonly cvvInput: Locator;
    readonly cardHolderNameInput: Locator;
    readonly confirmButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.paymentMethodDropdown = page.getByTestId('payment-method');
        this.cardNumberInput = page.getByTestId('credit_card_number');
        this.expirationDateInput = page.getByTestId('expiration_date');
        this.cvvInput = page.getByTestId('cvv');
        this.cardHolderNameInput = page.getByTestId('card_holder_name');
        this.confirmButton = page.getByTestId('finish');
        this.successMessage = page.getByTestId('payment-success-message');
    }

    async payByCreditCard({ cardNumber, expirationDate, cvv, cardHolderName }: CreditCardDetails) {
        await this.paymentMethodDropdown.selectOption('credit-card');
        await this.cardNumberInput.fill(cardNumber);
        await this.expirationDateInput.fill(expirationDate);
        await this.cvvInput.fill(cvv);
        await this.cardHolderNameInput.fill(cardHolderName);
        await this.confirmButton.click();
    }
}
