import { App, coreTypes, generators } from "@lbu/code-gen";
import { log } from "@lbu/insight";
import { mainFn } from "@lbu/stdlib";
import { todoModel, unimplementedModel } from "../src/index.js";

mainFn(import.meta, log, main);

export const nodemonArgs = "--ignore src/generated";

async function main() {
  const app = new App({
    types: coreTypes,
    generators: [
      generators.validator,
      generators.apiClient,
      generators.mock,
      generators.model,
      generators.router,
    ],
    verbose: true,
    outputDir: "./src/generated",
  });

  await app.init();

  todoModel(app);
  unimplementedModel(app);

  await app.generate();
}
