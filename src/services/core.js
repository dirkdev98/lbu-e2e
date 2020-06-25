import { serviceLogger } from "./loggers.js";

/**
 * @type {Application}
 */
export let app = undefined;

/**
 * @type {{bodyParser: Function, multipartBodyParser: Function}}
 */
export let bodyParsers = undefined;

/**
 * @param newApp
 */
export function setApp(newApp) {
  serviceLogger.info("setting app");
  app = newApp;
  return app;
}

/**
 * @param newBodyParsers
 */
export function setBodyParsers(newBodyParsers) {
  serviceLogger.info("setting bodyParsers");
  bodyParsers = newBodyParsers;
  return bodyParsers;
}
