import { todoModel } from "./todo.js";
import { unimplementedModel } from "./unimplemented.js";

/**
 * Internal structures
 *
 * @param {App} app
 */
export function extendWithInternal(app) {
  todoModel(app);
  unimplementedModel(app);
}
