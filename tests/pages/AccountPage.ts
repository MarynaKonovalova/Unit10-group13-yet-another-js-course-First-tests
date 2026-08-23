import { Page, Locator } from '@playwright/test';
import { HeaderFragment } from './HeaderFragment';

export class AccountPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly header: HeaderFragment;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'My account' });
    this.header = new HeaderFragment(page);
  }
}
