import { Home } from "../components/home/home.component";
import { Controller } from "../utils/controller.utils";

export class TC01 extends Controller {
  constructor() {
    super("TC01");
  }

  protected async workflow() {
    let home = new Home(this.page);
    await home.clickOnCentralMayorista();
    await home.clickOnCentralMayorista01();
    await home.hoverOnTree();
    await home.clickOnAdd();
    await home.clickOnPuntoDeVenta();
    await home.enterPuntoDeVenta("Lorem Ipsum");
    await home.clickOnCrear();
    await home.ttfAssert();
  }
}
