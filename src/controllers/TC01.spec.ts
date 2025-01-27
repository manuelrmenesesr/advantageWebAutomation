import { Controller } from "../utils/controller.utils.js";
import { Home } from "../components/home/home.component.js";
import { NavBar } from "../components/navBar/navBar.component.js";
import { Product } from "../components/product/product.component.js";
import { SearchResult } from "../components/searchResult/searchResult.component.js";
import { OrderPayment } from "../components/orderPayment/orderPayment.component.js";
import authData from "../models/auth.mock.json" assert { type: 'json' };

export class TC01 extends Controller {

  constructor() {
    super("Proceso de compra E2E");
  }

  protected async workflow(data: unknown) {
    const home = new Home(this.page);
    const searchResult = new SearchResult(this.page);
    const product = new Product(this.page);
    const navBar = new NavBar(this.page);
    const orderPayment = new OrderPayment(this.page);

    await home.clickOnSearchOption();
    await home.enterSearchData("Chromebook");
    await home.clickOnSearch();
    await searchResult.searchResultAssert();
    await searchResult.clickOnProduct("HP Chromebook 14 G1(ENERGY STAR)");
    await product.clickOnAddToCart();
    await navBar.goHome();
    await home.clickOnSearchOption();
    await home.enterSearchData("Headphones");
    await home.clickOnSearch();
    await searchResult.searchResultAssert();
    await searchResult.clickOnProduct(
      "Beats Studio 2 Over-Ear Matte Black Headphones"
    );
    await product.clickOnAddToCart();
    await navBar.clickOnCheckout();
    await orderPayment.login(authData.username, authData.password);
    await orderPayment.clickOnNext();
    await orderPayment.clickOnPayNow();
  }
}
