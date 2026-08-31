import { Page, Locator } from '@playwright/test';
import { HeaderFragment } from './HeaderFragment';

export class CartPage {
  readonly page: Page;
  readonly header: HeaderFragment;
  readonly productTitles: Locator;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
    this.productTitles = page.getByTestId('product-title');
    this.proceedToCheckoutButton = page.getByTestId('proceed-1');
  }
}
