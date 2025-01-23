import { Page } from "@playwright/test";
import { Component } from "../../utils/component.util";
import { orderPaymentLocators } from "./orderPayment.locators";

export class OrderPayment extends Component {
  constructor(page: Page) {
    super(page);
  }

  async enterUsername(data: string) {
    await this.page.locator(orderPaymentLocators.css_inpUsername).fill(data);
  }

  async enterPassword(data: string) {
    await this.page.locator(orderPaymentLocators.css_inpPassword).fill(data);
  }

  async clickOnLogin() {
    await this.page
      .getByRole(
        orderPaymentLocators.role_btnLogin.role,
        orderPaymentLocators.role_btnLogin.options
      )
      .click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickOnLogin();
  }

  async clickOnNext() {
    await this.page
      .getByRole(
        orderPaymentLocators.role_btnNext.role,
        orderPaymentLocators.role_btnNext.options
      )
      .click();
  }

  async clickOnPayNow() {
    await this.page.locator(orderPaymentLocators.css_btnPayNow).click();
  }
}
