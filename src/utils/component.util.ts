import { Page } from "@playwright/test";

export class Component {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async pause() {
    await this.page.pause();
  }
}
