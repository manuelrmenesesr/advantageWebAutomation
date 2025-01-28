import { AriaObject } from "../../utils/types.util.js";

const role_btnAdvantageDemo: AriaObject = {
  role: "link",
  options: { name: "dvantage DEMO" },
};

const role_btnCheckout: AriaObject = {
  role: "button",
  options: { name: /CHECKOUT/ },
};

export const navBarLocators = {
  role_btnAdvantageDemo: role_btnAdvantageDemo,
  role_btnCheckout: role_btnCheckout,
};
