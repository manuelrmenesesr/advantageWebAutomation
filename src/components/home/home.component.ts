import { Page, expect } from "@playwright/test";
import { Component } from "../../utils/component.util";
import { homeLocators } from "./home.locators";

export class Home extends Component {
  constructor(page: Page) {
    super(page);
  }

  async clickOnCentralMayorista() {
    await this.page
      .getByRole(
        homeLocators.role_treeCentralMayorista.role,
        homeLocators.role_treeCentralMayorista.options
      )
      .getByRole(homeLocators.role_treeCentralMayorista.subRole)
      .click();
  }

  async clickOnCentralMayorista01() {
    await this.page
      .getByRole(
        homeLocators.role_treeCentralMayorista01.role,
        homeLocators.role_treeCentralMayorista01.options
      )
      .getByRole(homeLocators.role_treeCentralMayorista01.subRole)
      .click();
  }

  async hoverOnTree() {
    await this.page.hover(homeLocators.css_divHoverTree);
  }

  async clickOnAdd() {
    await this.page.locator(homeLocators.css_btnAdd).click();
  }

  async clickOnPuntoDeVenta() {
    await this.page
      .getByLabel(homeLocators.obj_optPuntoDeVenta.lbl)
      .locator(homeLocators.obj_optPuntoDeVenta.css)
      .click();
  }

  async enterPuntoDeVenta(data: string) {
    await this.page.getByLabel(homeLocators.lbl_inpPuntoDeVenta).fill(data);
  }

  async clickOnCrear() {
    await this.page
      .getByRole(
        homeLocators.role_btnCrear.role,
        homeLocators.role_btnCrear.options
      )
      .click();
  }

  async ttfAssert() {
    await expect(this.page.getByText(homeLocators.txt_msgError)).toBeVisible();
  }
}
