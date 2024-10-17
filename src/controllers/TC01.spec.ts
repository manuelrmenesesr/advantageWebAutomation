import { Controller } from "../utils/controller.utils";
import { Home } from "../components/home/home.component";

export class TC01 extends Controller {
  constructor() {
    super("TC01");
  }

  protected async workflow() {
    let home = new Home(this.page);
    await home.clockOnSearch();
    await home.enterSearchData("Chromebook");
    await home.search();
    await home.finalAssert();
  }
}
