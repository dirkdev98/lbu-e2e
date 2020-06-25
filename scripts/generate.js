import { App } from "@lbu/code-gen";
import { log } from "@lbu/insight";
import { mainFn } from "@lbu/stdlib";
import { extendWithInternal } from "../gen/index.js";

mainFn(import.meta, log, main);

export const nodemonArgs = "--ignore src/generated";

async function main() {
  const app = await App.new({ verbose: true });

  extendWithInternal(app);

  await app.generate({
    outputDirectory: "./src/generated",
    useTypescript: false,
    dumpStructure: true,
    enabledGenerators: ["type", "validator", "router", "mock", "apiClient"],
  });
}
