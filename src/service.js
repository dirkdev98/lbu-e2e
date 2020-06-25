import { newLogger } from "@lbu/insight";
import { createBodyParsers } from "@lbu/server";
import { createApp } from "./api.js";
import {
  setApp,
  setBodyParsers,
  setServiceLogger,
  setTodoStore,
} from "./services/index.js";
import { TodoStore } from "./services/TodoStore.js";

/**
 * Create all services / service contexts upfront
 * We can do this because of how ES module exports are live bindings
 *
 * @returns {Promise<void>}
 */
export async function injectServices() {
  setServiceLogger(newLogger({ ctx: { type: "services" } }));

  setApp(createApp());
  setBodyParsers(createBodyParsers({}));
  setTodoStore(new TodoStore());
}
