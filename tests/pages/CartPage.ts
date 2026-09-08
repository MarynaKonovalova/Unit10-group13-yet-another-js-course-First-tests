import { Page, Locator } from '@playwright/test';
import { HeaderFragment } from './HeaderFragment';

export class CartPage {
  readonly page: Page;
  readonly header: HeaderFragment;
  readonly productTitles: Locator;
  readonly productPrices: Locator;
  readonly cartTotal: Locator;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
    this.productTitles = page.getByTestId('product-title');
    this.productPrices = page.getByTestId('product-price');
    this.cartTotal = page.getByTestId('cart-total');
    this.proceedToCheckoutButton = page.getByTestId('proceed-1');
  }
}
