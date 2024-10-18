import { AriaRole } from "../../utils/types.util";

const role_treeCentralMayorista: {
  role: AriaRole;
  options: {
    name: string;
  };
  subRole: AriaRole;
} = {
  role: "treeitem",
  options: {
    name: "icono CENTRAL MAYORISTA",
  },
  subRole: "button",
};

const role_treeCentralMayorista01: {
  role: AriaRole;
  options: {
    name: string;
  };
  subRole: AriaRole;
} = {
  role: "treeitem",
  options: {
    name: "icono CENTRAL MAYORISTA 01",
  },
  subRole: "button",
};

const role_btnCrear: {
  role: AriaRole;
  options: {
    name: string;
  };
} = {
  role: "button",
  options: {
    name: "Crear",
  },
};

export const homeLocators = {
  role_treeCentralMayorista: role_treeCentralMayorista,
  role_treeCentralMayorista01: role_treeCentralMayorista01,
  css_divHoverTree: ".node-content",
  css_btnAdd: "button.p-button.p-button-icon-only.p-button-rounded .pi.pi-plus",
  lbl_inpPuntoDeVenta: "Nombre del Punto de ventaMá",
  role_btnCrear: role_btnCrear,
  txt_msgError: "No se pudo crear el nodo",
};
