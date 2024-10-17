import { Page, expect } from "@playwright/test";
import { Component } from "../../utils/component.util";
import { homeLocators } from "./home.locators";

export class Home extends Component {
  constructor(page: Page) {
    super(page);
  }

  async clockOnSearch() {
    await this.page.getByTitle(homeLocators.tle_btnSearch).click();
  }

  async enterSearchData(data: string) {
    await this.page.getByPlaceholder(homeLocators.phr_inpSerach).fill(data);
  }

  async search() {
    await this.page.getByPlaceholder(homeLocators.phr_inpSerach).press("Enter");
  }

  async finalAssert() {
    await expect(
      this.page
        .locator(homeLocators.css_lblAssert)
        .filter({ hasText: homeLocators.txt_lblAssert })
    ).toBeVisible();
  }
}
