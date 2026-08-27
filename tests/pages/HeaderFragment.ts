import { Page, Locator } from '@playwright/test';

export class HeaderFragment {
  readonly page: Page;
  readonly userMenu: Locator;
  readonly cartIcon: Locator;
  readonly cartQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userMenu = page.getByTestId('nav-menu');
    this.cartIcon = page.getByTestId('nav-cart');
    this.cartQuantity = page.getByTestId('cart-quantity');
  }
}
