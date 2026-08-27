/* Test 6: Verify user can filter products by category
Steps:

Open homepage: https://practicesoftwaretesting.com.
Select Sander in the category list (note: create 3 enums with categories: Hand Tools, Power Tools, and Other).
Assert: 1. Verify the displayed products contain Sander in their names.
*/

import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { PowerToolsCategory } from './test-data/categories';

const CATEGORY_NAME = 'Sander';

test('Verify user can filter products by category', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.filterByCategory(PowerToolsCategory.Sander);

    const names = await homePage.productNames.allTextContents();

    expect(names.length).toBeGreaterThan(0);
    for (const name of names) {
        expect(name).toContain(CATEGORY_NAME);
    }
});
