import { App, generators } from "@lbu/code-gen";
import { log } from "@lbu/insight";
import { mainFn } from "@lbu/stdlib";
import { todoModel, unimplementedModel } from "../src/gen/index.js";

mainFn(import.meta, log, main);

export const nodemonArgs = "--ignore src/generated";

async function main() {
  const app = new App({
    generators: [
      generators.type,
      generators.validator,
      generators.mock,
      generators.router,
      generators.apiClient,
    ],
    verbose: true,
  });
  await app.init();

  todoModel(app);
  unimplementedModel(app);

  await app.generate({
    outputDirectory: "./src/generated",
    useTypescript: false,
  });
}
