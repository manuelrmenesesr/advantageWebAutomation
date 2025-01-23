import { AriaObject } from "../../utils/types.util";

const role_btnLogin: AriaObject = {
  role: "button",
  options: { name: "LOGIN" },
};

const role_btnNext: AriaObject = {
  role: "button",
  options: { name: "NEXT" },
};

export const orderPaymentLocators = {
  css_inpUsername: "input[name='usernameInOrderPayment']",
  css_inpPassword: "input[name='passwordInOrderPayment']",
  role_btnLogin: role_btnLogin,
  role_btnNext: role_btnNext,
  css_btnPayNow: "#pay_now_btn_MasterCredit",
};
