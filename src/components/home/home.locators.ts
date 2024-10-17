import { AriaRole } from "../../utils/types.util";

const fatherTree: {
  role: AriaRole;
  options: {
    name: string;
  };
} = {
  role: "treeitem",
  options: {
    name: "icono CENTRAL MAYORISTA",
  },
};

const sonTree: {
  role: AriaRole;
  options: {
    name: string;
  };
} = {
  role: "treeitem",
  options: {
    name: "icono CENTRAL MAYORISTA 01",
  },
};

export const homeLocators = {
  fatherTree: fatherTree,
  sonTree: sonTree,
  css_divHoverTree: ".node-content",
  css_btnAdd: "button.p-button.p-button-icon-only.p-button-rounded .pi.pi-plus",
};
