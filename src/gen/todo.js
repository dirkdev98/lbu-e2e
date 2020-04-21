/**
 * @param {App} app
 */
import { TypeCreator } from "@lbu/code-gen";

export function todoModel(app) {
  const M = new TypeCreator("todo");

  const todoList = M.object("List", {
    name: M.string(),
    items: M.array(
      M.object("Item", {
        completed: M.bool().default(false),
        name: M.string(),
      })
    ),
  });

  const todoCollection = M.generic("Collection")
    .keys(M.string())
    .values(todoList);

  app.validator(todoList);
  app.validator(todoCollection);

  const router = M.router("/todo");

  const paramValidator = M.object("NameParam", {
    name: M.string().min(0).max(30).trim().convert(),
  });

  app.route(
    router.get("/", "all").response(
      M.object({
        store: todoCollection,
      })
    )
  );

  const todoListResponse = M.object("ListResponse", {
    todo: todoList,
  });

  app.route(
    router
      .get("/:name", "one")
      .params(paramValidator)
      .response(todoListResponse)
  );

  app.route(
    router
      .post("/", "new")
      .body(
        M.object({
          name: M.string()
            .min(1)
            .max(40)
            .trim()
            .mock("'Todo ' + __.integer({ min: 0, max: 1000 })"),
        })
      )
      .response(todoListResponse)
  );

  app.route(
    router
      .post("/:name/item/", "createItem")
      .params(paramValidator)
      .body(
        M.object({
          name: M.string()
            .min(1)
            .max(365)
            .trim()
            .mock("__.sentence({ words: 6 })"),
        })
      )
      .response(todoListResponse)
  );

  app.route(
    router
      .post("/:name/item/toggle", "toggleItem")
      .params(paramValidator)
      .body(
        M.object({
          index: M.number().integer().convert().min(0),
        })
      )
      .response(todoListResponse)
  );

  app.route(
    router
      .delete("/:name", "delete")
      .params(paramValidator)
      .response(
        M.object({
          deleted: M.bool(),
        })
      )
  );
}
