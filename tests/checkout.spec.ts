/* Test: Verify logged-in user can complete a purchase
Steps:

Add the first product from the homepage to the cart (save its name and price).
Open the cart and verify that the name, price, and total match the added product.
Click "Proceed to checkout".
Verify the user is already logged in and nothing else is needed.
Fill in the missing fields on the Billing Address page.
On the payment page, pay by Credit Card:
  Card number: 1111-1111-1111-1111
  Expiration date: current date + 3 months
  CVV: 111
  Card holder name: any name
Verify the payment was successful.
*/

import { test, expect } from './fixture';
import { expirationDateInThreeMonths } from './utils/date';
import { testCreditCard } from './test-data/payment';

test('Verify logged-in user can complete a purchase', async ({ loggedInApp: app, page }) => {
    await app.homePage.goto();

    const productName = (await app.homePage.productNames.first().textContent())!.trim();
    const productPrice = (await app.homePage.productPrices.first().textContent())!.trim();

    await app.homePage.productNames.first().click();
    await page.waitForURL(/\/product/);
    await app.productPage.addToCartButton.click();
    await expect(app.productPage.cartAlert).toBeVisible();

    await app.productPage.header.cartIcon.click();
    await expect(page).toHaveURL('/checkout');

    await expect(app.cartPage.productTitles).toHaveCount(1);
    await expect(app.cartPage.productTitles.first()).toHaveText(productName);
    await expect(app.cartPage.productPrices.first()).toHaveText(productPrice);
    await expect(app.cartPage.cartTotal).toHaveText(productPrice);

    await app.cartPage.proceedToCheckoutButton.click();

    await expect(app.checkoutSignInPage.alreadyLoggedInMessage).toBeVisible();
    await app.checkoutSignInPage.proceedToCheckoutButton.click();

    await app.billingAddressPage.fillMissingFields({
        country: 'Germany',
        postalCode: '12345',
        houseNumber: '42',
        state: 'Berlin',
    });
    await app.billingAddressPage.proceedToCheckoutButton.click();

    await app.paymentPage.payByCreditCard({
        ...testCreditCard,
        expirationDate: expirationDateInThreeMonths,
    });

    await expect(app.paymentPage.successMessage).toBeVisible();
    await expect(app.paymentPage.successMessage).toHaveText('Payment was successful');
});
