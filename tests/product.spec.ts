/* Test 2: Verify user can view product details
Steps:

Open homepage: https://practicesoftwaretesting.com.
Click on the product "Combination Pliers".
Assertions:

Verify URL contains https://practicesoftwaretesting.com/product.
Verify product name is "Combination Pliers".
Verify product price is 14.15.
Verify "Add to Cart" button is visible.
Verify "Add to Favorites" button is visible.
*/

import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

const PRODUCT_NAME = 'Combination Pliers';

test('Verify user can view product details', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.goto();
    await homePage.openProduct(PRODUCT_NAME);

    await expect(page).toHaveURL(/.*\/product/);
    await expect(productPage.productName).toHaveText(PRODUCT_NAME);
    await expect(productPage.price).toHaveText('14.15');
    await expect(productPage.addToCartButton).toBeVisible();
    await expect(productPage.addToFavoritesButton).toBeVisible();
});
