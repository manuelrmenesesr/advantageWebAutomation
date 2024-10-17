import { Page } from "@playwright/test";
import { Component } from "../../utils/component.util";
import { homeLocators } from "./home.locators";

export class Home extends Component {
  constructor(page: Page) {
    super(page);
  }

  async clickOnFatherTree() {
    //await this.page.goto('https://ui-nxt360.qa.smartpayment.com.mx:7001/browser/');
    await this.page
      .getByRole(homeLocators.fatherTree.role, homeLocators.fatherTree.options)
      .getByRole("button")
      .click();
  }

  async clickOnSonTree() {
    await this.page
      .getByRole(homeLocators.sonTree.role, homeLocators.sonTree.options)
      .getByRole("button")
      .click();
  }

  async hoverOnTree() {
    await this.page.hover(homeLocators.css_divHoverTree);
  }

  async clickOnAdd() {
    await this.page.locator(homeLocators.css_btnAdd).click();
  }
}
