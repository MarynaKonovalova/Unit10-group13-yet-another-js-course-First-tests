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
  }

  async openProduct(name: string) {
    await this.page.getByTestId("product-name").filter({ hasText: name }).click();
  }

  async sortBy(value: string) {
    await this.sortDropdown.selectOption(value);
  }
}
