import { Page } from "@playwright/test";
import { Component } from "../../utils/component.util";
import { homeLocators } from "./home.locators";

export class Home extends Component {
  constructor(page: Page) {
    super(page);
  }

  async clickOnSearchOption() {
    await this.page.getByTitle(homeLocators.tle_btnSearch).click();
  }

  async enterSearchData(data: string) {
    await this.page.getByPlaceholder(homeLocators.phr_inpSerach).fill(data);
  }

  async clickOnSearch() {
    await this.page.getByPlaceholder(homeLocators.phr_inpSerach).press("Enter");
  }
}
