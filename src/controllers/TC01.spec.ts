import { Controller } from "../utils/controller.utils";
import { Home } from "../components/home/home.component";
import { NavBar } from "../components/navBar/navBar.component";
import { Product } from "../components/product/product.component";
import { SearchResult } from "../components/searchResult/searchResult.component";
import { OrderPayment } from "../components/orderPayment/orderPayment.component";

export class TC01 extends Controller {
  constructor() {
    super("TC01");
  }

  protected async workflow() {
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
    await orderPayment.login("josem00", "Kesadilla95!");
    await orderPayment.clickOnNext();
    await orderPayment.clickOnPayNow();
  }
}
