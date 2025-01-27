import { TC01 } from "../controllers/TC01.spec.js";
import { test } from "./.hooks.js";

const tc01 = new TC01();

test(tc01.getDescription(), async ({ page }) => {
  await tc01.exec(page);
});