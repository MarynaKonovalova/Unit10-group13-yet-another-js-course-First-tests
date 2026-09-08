/* Test 4 & 5: Verify user can perform sorting by price (asc & desc)
Steps:

Open homepage: https://practicesoftwaretesting.com.
Select Price (High - Low) / Price (Low - High) in the sort dropdown.
Assert: 1. Verify all the displayed products are sorted by prices ascending or descending.
*/

import { test, expect } from './fixture';

const sortCases = [
    { label: 'Price (Low - High)', value: 'price,asc', direction: 'ascending' as const },
    { label: 'Price (High - Low)', value: 'price,desc', direction: 'descending' as const },
];

for (const { label, value, direction } of sortCases) {
    test(`Verify user can perform sorting by price - ${label}`, async ({ app }) => {
        await app.homePage.goto();
        await app.homePage.sortBy(value);

        const prices = (await app.homePage.productPrices.allTextContents()).map((price) =>
            parseFloat(price.replace('$', ''))
        );
        const sortedPrices = [...prices].sort((a, b) =>
            direction === 'ascending' ? a - b : b - a
        );

        expect(prices).toEqual(sortedPrices);
    });
}
