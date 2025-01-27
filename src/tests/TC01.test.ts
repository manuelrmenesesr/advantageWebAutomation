import { TC01 } from "../controllers/TC01.spec.js";
import { test } from "./.hooks.js";
import data from "../models/TC01.mock.json" assert { type: "json" };

const tc01 = new TC01();

data.forEach((products, index) => {
  test(`${tc01.getDescription()} - Iteración ${index + 1}`, async ({ page }) => {
    await tc01.exec(page, products);
  });
});