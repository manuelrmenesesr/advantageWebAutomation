import { Page, expect } from "@playwright/test";
import { Component } from "../../utils/component.util.js";
import { searchResultLocators } from "./searchResult.locators.js";

export class SearchResult extends Component {
  constructor(page: Page) {
    super(page);
  }

  async searchResultAssert() {
    await expect(
      this.page
        .locator(searchResultLocators.lblSearchResult.css)
        .filter({ hasText: searchResultLocators.lblSearchResult.txt })
    ).toBeVisible();
  }

  async clickOnProduct(data: string) {
    await this.page.getByText(data, { exact: true }).click();
  }
}
