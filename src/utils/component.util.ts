import { Page } from "@playwright/test";
import { PauseOnCI } from "./pauseOnCI.utils";

export class Component {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async pause() {
    if (process.env.CI) throw new PauseOnCI();
    await this.page.pause();
  }
}
