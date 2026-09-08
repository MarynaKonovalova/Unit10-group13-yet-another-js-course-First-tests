/* Task 2: Mock the /products API response and verify the homepage renders all mocked products
Steps:

Mock the response of https://api.practicesoftwaretesting.com/products.
Mocked response must return 20 products.
Verify all 20 products are correctly displayed on the homepage.
*/

import { test, expect } from './fixture';

const MOCK_PRODUCTS_COUNT = 20;

function buildMockProducts(count: number) {
    return Array.from({ length: count }, (_, index) => ({
        id: `mock-product-${index}`,
        name: `Mock Product ${index}`,
        description: 'Mocked product for testing purposes.',
        price: 9.99 + index,
        is_location_offer: false,
        is_rental: false,
        co2_rating: 'A',
        in_stock: true,
        is_eco_friendly: false,
        product_image: {
            id: `mock-image-${index}`,
            by_name: 'Mock Author',
            by_url: 'https://example.com',
            source_name: 'Mock',
            source_url: 'https://example.com',
            file_name: 'mock.avif',
            title: 'Mock product image',
        },
        category: {
            id: 'mock-category',
            name: 'Mock Category',
            slug: 'mock-category',
        },
        brand: {
            id: 'mock-brand',
            name: 'Mock Brand',
        },
    }));
}

test('Verify mocked products are displayed on the homepage', async ({ app, page }) => {
    const mockProducts = buildMockProducts(MOCK_PRODUCTS_COUNT);

    await page.route('**/products', (route) =>
        route.fulfill({
            json: {
                current_page: 1,
                data: mockProducts,
                from: 1,
                last_page: 1,
                per_page: MOCK_PRODUCTS_COUNT,
                to: MOCK_PRODUCTS_COUNT,
                total: MOCK_PRODUCTS_COUNT,
            },
        })
    );

    await app.homePage.goto();

    await expect(app.homePage.productNames).toHaveCount(MOCK_PRODUCTS_COUNT);
});
