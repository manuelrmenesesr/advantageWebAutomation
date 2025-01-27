import { Page } from "@playwright/test";

export class Controller {
  protected description: string;
  protected page: Page;

  constructor(description: string) {
    this.description = description;
  }

  public getDescription() {
    return this.description;
  }

  protected async loadDataTest() {}

  protected async workflow(data?: unknown) {}

  public async exec(page: Page, data?: unknown) {
    this.page = page;
    await this.loadDataTest();
    await this.workflow(data);
  }
}
