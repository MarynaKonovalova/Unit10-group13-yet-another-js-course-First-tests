/* Test 2 & 3: Verify user can perform sorting by name (asc & desc)
Steps:

Open homepage: https://practicesoftwaretesting.com.
Select Name (A - Z) / Name (Z - A) in the sort dropdown.
Assert: 1. Verify all the displayed products are sorted by names ascending or descending.
*/

import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

const sortCases = [
    { label: 'Name (A - Z)', value: 'name,asc', direction: 'ascending' as const },
    { label: 'Name (Z - A)', value: 'name,desc', direction: 'descending' as const },
];

for (const { label, value, direction } of sortCases) {
    test(`Verify user can perform sorting by name - ${label}`, async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.goto();
        await homePage.sortBy(value);

        const names = (await homePage.productNames.allTextContents()).map((name) => name.trim());
        const sortedNames = [...names].sort((a, b) =>
            direction === 'ascending' ? a.localeCompare(b) : b.localeCompare(a)
        );

        expect(names).toEqual(sortedNames);
    });
}
