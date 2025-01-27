export type AriaRole =
  | "button"
  | "checkbox"
  | "link"
  | "textbox"
  | "dialog"
  | "alert"
  | "heading"
  | "img"
  | "list"
  | "listitem"
  | "menu"
  | "menuitem"
  | "navigation"
  | "progressbar"
  | "radio"
  | "radiogroup"
  | "separator"
  | "slider"
  | "spinbutton"
  | "tab"
  | "tabpanel"
  | "textbox"
  | "tree"
  | "treeitem";

export type AriaObject = {
  role: AriaRole;
  options: {
    name: string | RegExp;
  };
};
