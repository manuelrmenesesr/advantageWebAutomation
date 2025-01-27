import { Page } from "@playwright/test";
import { Component } from "../../utils/component.util.js";
import { productLocators } from "./product.locators.js";

export class Product extends Component {
  constructor(page: Page) {
    super(page);
  }

  async clickOnAddToCart() {
    await this.page
      .getByRole(
        productLocators.role_btnAddToCart.role,
        productLocators.role_btnAddToCart.options
      )
      .click();
  }
}
