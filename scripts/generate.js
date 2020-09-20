import { App } from "@lbu/code-gen";
import { mainFn } from "@lbu/stdlib";
import { extendWithInternal } from "../gen/index.js";

mainFn(import.meta, main);

/** @type {CliWatchOptions} */
export const watchOptions = {
  ignoredPatterns: "src/generated",
};

async function main() {
  const app = await App.new({ verbose: true });

  extendWithInternal(app);

  await app.generate({
    outputDirectory: "./src/generated",
    isNodeServer: true,
    dumpPostgres: false,
  });
}
