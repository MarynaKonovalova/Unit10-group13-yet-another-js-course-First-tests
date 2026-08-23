import { Page } from '@playwright/test';
import { HeaderFragment } from './HeaderFragment';

export class HomePage {
  readonly page: Page;
  readonly header: HeaderFragment;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
  }

  async goto() {
    await this.page.goto('/');
  }
}
