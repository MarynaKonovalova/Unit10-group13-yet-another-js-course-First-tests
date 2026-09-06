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

import { test, expect } from './fixture';

const PRODUCT_NAME = 'Combination Pliers';

test('Verify user can view product details', async ({ app, page }) => {
    await app.homePage.goto();
    await app.homePage.openProduct(PRODUCT_NAME);

    await expect(page).toHaveURL(/.*\/product/);
    await expect(app.productPage.productName).toHaveText(PRODUCT_NAME);
    await expect(app.productPage.price).toHaveText('14.15');
    await expect(app.productPage.addToCartButton).toBeVisible();
    await expect(app.productPage.addToFavoritesButton).toBeVisible();
});
