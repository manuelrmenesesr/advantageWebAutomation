import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createComponent(componentName) {
  componentName = componentName.charAt(0).toLowerCase() + componentName.slice(1);
  const componentDir = path.join(__dirname, "../components", componentName);
  const templateComponentPath = path.join(__dirname, "templates/component.template.txt");
  const templateLocatorsPath = path.join(__dirname, "templates/component.locators.template.txt");
  const componentPath = path.join(componentDir, `${componentName}.component.ts`);
  const componentLocatorsPath = path.join(componentDir, `${componentName}.locators.ts`);

  if (fs.existsSync(componentDir)) {
    console.log(`Component ${componentName} already exists.`);
    return;
  }

  fs.mkdirSync(componentDir, { recursive: true });

  let template1 = fs.readFileSync(templateComponentPath, "utf8");
  let template2 = fs.readFileSync(templateLocatorsPath, "utf8");

  let newComponent1 = template1.replace(/{{\s*componentName\s*}}/g, componentName);
  newComponent1 = newComponent1.replace(/{{\s*pascalComponentName\s*}}/g, componentName.charAt(0).toUpperCase() + componentName.slice(1));
  let newComponent2 = template2.replace(/{{\s*componentName\s*}}/g, componentName);

  fs.writeFileSync(componentPath, newComponent1);
  fs.writeFileSync(componentLocatorsPath, newComponent2);

  console.log(`Component ${componentName} was created successfully.`);
}

const componentName = process.argv[2];

if (!componentName) {
  console.log("Component name not provided");
  process.exit(1);
}

createComponent(componentName);
