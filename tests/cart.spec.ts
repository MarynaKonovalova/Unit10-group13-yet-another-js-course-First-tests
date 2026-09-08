/* Test 1: Verify user can add product to cart
Steps:

Open homepage: https://practicesoftwaretesting.com.
Click on the product "Slip Joint Pliers".
Assert: 1. Verify URL contains https://practicesoftwaretesting.com/product.
2. Verify product name is "Slip Joint Pliers".
3. Verify product price is 9.17.
Click "Add to Cart" button.
Assert: 1. Verify alert message is visible.
2. Verify alert message text is "Product added to shopping cart".
3. Verify alert disappears in 8 seconds.
4. Verify cart icon in navigation shows quantity = 1.
Click on the cart icon in the navigation.
Assert: 1. Verify URL is https://practicesoftwaretesting.com/checkout.
2. Verify the number of products in the cart table equals 1.
3. Verify product title in the cart is "Slip Joint Pliers".
4. Verify "Proceed to Checkout" button is visible.
*/

import { test, expect } from './fixture';

const PRODUCT_NAME = 'Slip Joint Pliers';
const PRODUCT_PRICE = '9.17';

test('Verify user can add product to cart', async ({ app, page }) => {
    await app.homePage.goto();
    await app.homePage.openProduct(PRODUCT_NAME);

    await expect(page).toHaveURL(/.*\/product/);
    await expect(app.productPage.productName).toHaveText(PRODUCT_NAME);
    await expect(app.productPage.price).toHaveText(PRODUCT_PRICE);

    await app.productPage.addToCartButton.click();

    await expect(app.productPage.cartAlert).toBeVisible();
    await expect(app.productPage.cartAlert).toHaveText('Product added to shopping cart.');
    await expect(app.productPage.cartAlert).toBeHidden({ timeout: 9000 });
    await expect(app.productPage.header.cartQuantity).toHaveText('1');

    await app.productPage.header.cartIcon.click();

    await expect(page).toHaveURL('/checkout');
    await expect(app.cartPage.productTitles).toHaveCount(1);
    await expect(app.cartPage.productTitles.first()).toHaveText(PRODUCT_NAME);
    await expect(app.cartPage.proceedToCheckoutButton).toBeVisible();
});
