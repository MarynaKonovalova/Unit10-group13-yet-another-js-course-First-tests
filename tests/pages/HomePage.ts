import { Page, Locator } from '@playwright/test';
import { HeaderFragment } from './HeaderFragment';

export class HomePage {
  readonly page: Page;
  readonly header: HeaderFragment;
  readonly sortDropdown: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
    this.sortDropdown = page.getByTestId('sort');
    this.productNames = page.getByTestId('product-name');
    this.productPrices = page.getByTestId('product-price');
  }

  async goto() {
    await this.page.goto('/');
    await this.productNames.first().waitFor();
  }

  async openProduct(name: string) {
    await this.page.getByTestId("product-name").filter({ hasText: name }).click();
  }

  async sortBy(value: string) {
    const productsResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes('/products') &&
        response.ok() &&
        (response.request().postData() ?? '').includes(`"sort":"${value}"`)
    );
    await this.sortDropdown.selectOption(value);
    await productsResponse;
  }

  async filterByCategory(categoryLabel: string) {
    const productsResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes('/products') &&
        response.ok() &&
        (response.request().postData() ?? '').includes('by_category')
    );
    await this.page.getByLabel(categoryLabel, { exact: true }).check();
    await productsResponse;
  }
}
