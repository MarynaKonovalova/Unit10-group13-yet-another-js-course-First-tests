import { Page, Locator } from '@playwright/test';

export class HeaderFragment {
  readonly page: Page;
  readonly userMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userMenu = page.getByTestId('nav-menu');
  }
}
