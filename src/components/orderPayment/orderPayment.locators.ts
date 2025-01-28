import { AriaObject } from "../../utils/types.util.js";

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
  lblLoginFailed: {
    css: "#orderPayment",
    txt: "Incorrect user name or password.",
  },
  role_btnNext: role_btnNext,
  css_btnPayNow: "#pay_now_btn_MasterCredit",
};
