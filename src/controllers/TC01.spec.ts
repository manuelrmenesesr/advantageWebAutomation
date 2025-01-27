import { Controller } from "../utils/controller.utils.js";
import { Home } from "../components/home/home.component.js";
import { NavBar } from "../components/navBar/navBar.component.js";
import { Product } from "../components/product/product.component.js";
import { SearchResult } from "../components/searchResult/searchResult.component.js";
import { OrderPayment } from "../components/orderPayment/orderPayment.component.js";
import authData from "../models/auth.mock.json" assert { type: "json" };

type DataProducts = {
  searchData: string;
  product: string;
};

type DataProviderElement = {
  products: DataProducts[];
};

export class TC01 extends Controller {
  constructor() {
    super("Proceso de compra E2E");
  }

  protected async workflow(data: DataProviderElement) {
    const home = new Home(this.page);
    const searchResult = new SearchResult(this.page);
    const product = new Product(this.page);
    const navBar = new NavBar(this.page);
    const orderPayment = new OrderPayment(this.page);

    data.products.forEach(async (dataProduct) => {
      await navBar.goHome();
      await home.clickOnSearchOption();
      await home.enterSearchData(dataProduct.searchData);
      await home.clickOnSearch();
      await searchResult.searchResultAssert();
      await searchResult.clickOnProduct(dataProduct.product);
      await product.clickOnAddToCart();
    });
    await navBar.clickOnCheckout();
    await orderPayment.login(authData.username, authData.password);
    // await orderPayment.clickOnNext();
    // await orderPayment.clickOnPayNow();
  }
}
