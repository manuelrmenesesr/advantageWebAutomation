import { Home } from "../components/home/home.component";
import { Controller } from "../utils/controller.utils";

export class TC01 extends Controller {
  constructor() {
    super("TC01");
  }

  protected async workflow() {
    let home = new Home(this.page);
    home.clickOnCentralMayorista();
  }
}
