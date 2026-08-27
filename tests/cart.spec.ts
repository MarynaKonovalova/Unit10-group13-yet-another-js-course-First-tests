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

import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';

const PRODUCT_NAME = 'Slip Joint Pliers';
const PRODUCT_PRICE = '9.17';

test('Verify user can add product to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.goto();
    await homePage.openProduct(PRODUCT_NAME);

    await expect(page).toHaveURL(/.*\/product/);
    await expect(productPage.productName).toHaveText(PRODUCT_NAME);
    await expect(productPage.price).toHaveText(PRODUCT_PRICE);

    await productPage.addToCartButton.click();

    await expect(productPage.cartAlert).toBeVisible();
    await expect(productPage.cartAlert).toHaveText('Product added to shopping cart.');
    await expect(productPage.cartAlert).toBeHidden({ timeout: 9000 });
    await expect(productPage.header.cartQuantity).toHaveText('1');

    await productPage.header.cartIcon.click();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/checkout');
    await expect(cartPage.productTitles).toHaveCount(1);
    await expect(cartPage.productTitles.first()).toHaveText(PRODUCT_NAME);
    await expect(cartPage.proceedToCheckoutButton).toBeVisible();
});
