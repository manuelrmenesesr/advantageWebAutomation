import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createComponent(controllerName) {
  controllerName = controllerName.charAt(0).toUpperCase() + controllerName.slice(1);
  const templatePath = path.join(__dirname, "templates/controller.template.txt");
  const controllerPath = path.join(__dirname, "../controllers", `${controllerName}.spec.ts`);

  if (fs.existsSync(controllerPath)) {
    console.log(`Controller ${controllerName} already exists.`);
    return;
  }

  fs.mkdirSync(path.join(__dirname, "../controllers"), { recursive: true });
  let template = fs.readFileSync(templatePath, "utf8");

  const newComponent = template.replace(/{{\s*controllerName\s*}}/g, controllerName);

  fs.writeFileSync(controllerPath, newComponent);
  console.log(`Controller ${controllerName} was created successfully.`);
}

const controllerName = process.argv[2];

if (!controllerName) {
  console.log("Controller name not provided");
  process.exit(1);
}

createComponent(controllerName);
