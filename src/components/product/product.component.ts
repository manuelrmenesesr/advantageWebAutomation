import { Page } from "@playwright/test";
import { Component } from "../../utils/component.util";
import { productLocators } from "./product.locators";

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
