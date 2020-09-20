import { TypeCreator } from "@lbu/code-gen";

/**
 * @param {App} app
 */
export function todoModel(app) {
  const T = new TypeCreator("todo");

  const todoList = T.object("List").keys({
    name: T.string(),
    items: [
      T.object("Item").keys({
        completed: T.bool().default(false),
        name: T.string(),
      }),
    ],
  });

  const todoCollection = T.generic("Collection")
    .keys(T.string())
    .values(todoList);

  app.add(todoCollection);

  const router = T.router("/todo");

  const params = {
    name: T.string().max(30).trim(),
  };

  const response = {
    todo: todoList,
  };

  app.add(
    router.get("/", "all").response({
      store: todoCollection,
    }),

    router.get("/:name", "one").params(params).response(response),

    router
      .post("/", "new")
      .body({
        name: params.name,
      })
      .response(response),

    router
      .post("/:name/item/", "createItem")
      .params(params)
      .body({
        name: T.string().max(365).trim(),
      })
      .response(response),

    router
      .post("/:name/item/toggle", "toggleItem")
      .params(params)
      .body({
        index: T.number().convert().min(0),
      })
      .response(response),

    router
      .delete("/:name", "delete")
      .params(params)
      .response({ deleted: true }),
  );
}
