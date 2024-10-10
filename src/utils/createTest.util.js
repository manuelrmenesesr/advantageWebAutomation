import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createFileFromTemplate(params, destinationPath, templatePath) {
  let template = fs.readFileSync(templatePath, "utf8");

  template = template.replace(/{{\s*controllerName\s*}}/g, params.controllerName);
  template = template.replace(/{{\s*controllerNameLowerCase\s*}}/g, params.controllerName.toLowerCase());
  template = template.replace(/{{\s*subfolder\s*}}/g, params.subfolder);
  template = template.replace(/{{\s*suite\s*}}/g, params.suite);

  fs.writeFileSync(destinationPath, template);
  console.log(`File created successfully at ${destinationPath}`);
}

(() => {
  const controllersDir = path.join(__dirname, "../controllers");
  fs.mkdirSync(controllersDir, { recursive: true });
  const controllers = fs.readdirSync(controllersDir).filter(file => file.endsWith(".spec.ts"));

  if (controllers.length === 0) {
    console.log("No controllers found.");
    return;
  }

  console.log("Select an existing controller:");
  controllers.forEach((controller, index) => {
    console.log(`${index + 1}. ${controller}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter the controller number: ", (controllerIndex) => {
    const controllerIndexParsed = parseInt(controllerIndex) - 1;
    if (isNaN(controllerIndexParsed) || controllerIndexParsed < 0 || controllerIndexParsed >= controllers.length) {
      console.log("Invalid selection.");
      rl.close();
      return;
    }

    const controllerName = controllers[controllerIndexParsed].replace(".spec.ts", "");

    rl.question("Enter the name of the suite: ", (suite) => {
      let subfolder = "";
      if (suite != "") {
        subfolder = "../";
      }

      const destinationDir = path.join(__dirname, "../tests", suite);

      if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
      }

      const destinationPath = path.join(destinationDir, `${controllerName}.test.ts`);
      const templatePath = path.join(__dirname, "templates/test.template.txt");
      const hooksFilePath = path.join(destinationDir, `${suite}.hooks.ts`);

      const params = {
        controllerName,
        suite,
        subfolder
      };

      if (!fs.existsSync(hooksFilePath)) {
        const hooksTemplatePath = path.join(__dirname, "templates/hooks.template.txt");
        createFileFromTemplate(params, hooksFilePath, hooksTemplatePath);
      }
      
      createFileFromTemplate(params, destinationPath, templatePath);
      rl.close();
    });
  });
})();
