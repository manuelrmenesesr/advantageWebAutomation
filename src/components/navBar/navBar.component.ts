import { Page } from "@playwright/test";
import { Component } from "../../utils/component.util.js";
import { navBarLocators } from "./navBar.locators.js";

export class NavBar extends Component {
  constructor(page: Page) {
    super(page);
  }

  async goHome() {
    await this.page
      .getByRole(
        navBarLocators.role_btnAdvantageDemo.role,
        navBarLocators.role_btnAdvantageDemo.options
      )
      .click();
  }

  async clickOnCheckout() {
    await this.page
      .getByRole(
        navBarLocators.role_btnCheckout.role,
        navBarLocators.role_btnCheckout.options
      )
      .click();
  }
}
