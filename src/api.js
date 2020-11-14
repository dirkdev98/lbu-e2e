import { getApp } from "@lbu/server";
import { AppError, isNil } from "@lbu/stdlib";
import {
  groupMiddleware,
  router,
  setBodyParsers,
  todoHandlers,
} from "./generated/router.js";
import { validatorSetError } from "./generated/validators.js";
import { app, bodyParsers, todoStore } from "./services/index.js";

/**
 * Create a basic LBU app
 */
export function createApp() {
  return getApp({
    errorOptions: {
      leakError: process.env.NODE_ENV !== "production",
    },
    headers: {
      cors: {
        origin: (ctx) => {
          if (
            ctx.get("origin") === "http://localhost:3000" ||
            ctx.get("origin") === "https://lbu-e2e.lightbase.nl"
          ) {
            return ctx.get("origin");
          }
          return false;
        },
      },
    },
    proxy: process.env.NODE_ENV === "production",
  });
}

export function constructApp() {
  validatorSetError(AppError.validationError);
  setBodyParsers(bodyParsers);

  app.use(router);

  mountHandlers();

  return app;
}

function mountHandlers() {
  groupMiddleware.todo = (ctx, next) => {
    ctx.user = todoStore.get(ctx.request.ip);

    return next();
  };

  todoHandlers.all = (ctx, next) => {
    ctx.body = {
      store: ctx.user,
      poweredByRender: true,
    };

    return next();
  };

  todoHandlers.one = (ctx, next) => {
    const todo = ctx.user[ctx.validatedParams.name];
    if (isNil(todo)) {
      throw AppError.validationError("todo.unknown", ctx.validatedParams);
    }

    ctx.body = {
      todo,
    };

    return next();
  };

  todoHandlers.new = (ctx, next) => {
    ctx.user[ctx.validatedBody.name] = {
      name: ctx.validatedBody.name,
      items: [],
    };

    ctx.body = {
      todo: ctx.user[ctx.validatedBody.name],
    };

    return next();
  };

  todoHandlers.createItem = (ctx, next) => {
    const todo = ctx.user[ctx.validatedParams.name];
    if (isNil(todo)) {
      throw AppError.validationError("todo.unknown", ctx.validatedParams);
    }

    todo.items.push({ completed: false, name: ctx.validatedBody.name });

    ctx.body = {
      todo,
    };

    return next();
  };

  todoHandlers.toggleItem = (ctx, next) => {
    const todo = ctx.user[ctx.validatedParams.name];
    if (isNil(todo)) {
      throw AppError.validationError("todo.unknown", ctx.validatedParams);
    }

    if (ctx.validatedBody.index >= todo.items.length) {
      throw AppError.validationError("todo.item.index", ctx.validatedBody);
    }

    todo.items[ctx.validatedBody.index].completed = !todo.items[
      ctx.validatedBody.index
    ].completed;

    ctx.body = {
      todo,
    };

    return next();
  };

  todoHandlers.delete = (ctx, next) => {
    const todo = ctx.user[ctx.validatedParams.name];
    if (isNil(todo)) {
      throw AppError.validationError("todo.unknown", ctx.validatedParams);
    }

    delete ctx.user[ctx.validatedParams.name];

    ctx.body = {
      deleted: true,
    };

    return next();
  };
}
