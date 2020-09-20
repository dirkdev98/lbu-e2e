import { mainFn } from "@lbu/stdlib";
import { constructApp } from "../src/api.js";
import { injectServices } from "../src/service.js";

mainFn(import.meta, main);

/**
 * @param {Logger} logger
 */
async function main(logger) {
  await injectServices();
  const app = constructApp();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    logger.info({ msg: "Listening", port });
  });
}
