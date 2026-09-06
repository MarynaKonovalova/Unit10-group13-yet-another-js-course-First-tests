/* Test 6: Verify user can filter products by category
Steps:

Open homepage: https://practicesoftwaretesting.com.
Select Sander in the category list (note: create 3 enums with categories: Hand Tools, Power Tools, and Other).
Assert: 1. Verify the displayed products contain Sander in their names.
*/

import { test, expect } from './fixture';
import { PowerToolsCategory } from './test-data/categories';

const CATEGORY_NAME = 'Sander';

test('Verify user can filter products by category', async ({ app }) => {
    await app.homePage.goto();
    await app.homePage.filterByCategory(PowerToolsCategory.Sander);

    await expect(app.homePage.productNames).not.toHaveCount(0);
    for (const name of await app.homePage.productNames.allTextContents()) {
        expect(name).toContain(CATEGORY_NAME);
    }
});
