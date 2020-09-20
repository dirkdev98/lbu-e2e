import { mainTestFn, test } from "@lbu/cli";
import { AppError } from "@lbu/stdlib";
import axios from "axios";
import { createApiClient, todoApi } from "./generated/apiClient.js";
import { validatorSetError } from "./generated/validators.js";

mainTestFn(import.meta);

createApiClient(
  axios.create({
    baseURL: "http://localhost:3000",
  }),
);

validatorSetError(AppError.validationError);

test("todo#all", async (t) => {
  const response = await todoApi.all();

  t.equal(Object.keys(response.store).length, 1);

  for (const key of Object.keys(response.store)) {
    t.equal(response.store[key].name, key);
  }
});

test("todo#one", async (t) => {
  const response = await todoApi.one({ name: "Default List" });

  t.equal(response.todo.name, "Default List");
});

test("todo#new", async (t) => {
  const postResponse = await todoApi.new({ name: "Todo Test" });
  const getResponse = await todoApi.one({ name: "Todo Test" });

  t.deepEqual(postResponse, getResponse);
  t.equal(postResponse.todo.name, "Todo Test");
  t.equal(postResponse.todo.items.length, 0);
});

test("todo#createItem", async (t) => {
  const response = await todoApi.createItem(
    { name: "Todo Test" },
    { name: "TodoItem 1" },
  );

  t.equal(response.todo.items.length, 1);
  t.equal(response.todo.items[0].completed, false);
  t.equal(response.todo.items[0].name, "TodoItem 1");
});

test("todo#toggleItem", async (t) => {
  let response = await todoApi.toggleItem(
    {
      name: "Todo Test",
    },
    { index: "0" },
  );

  t.equal(response.todo.items[0].completed, true, "item completed");

  response = await todoApi.toggleItem(
    {
      name: "Todo Test",
    },
    {
      index: 0,
    },
  );
  t.equal(response.todo.items[0].completed, false);
});

test("todo#delete", async (t) => {
  const response = await todoApi.delete({ name: "Todo Test" });
  t.equal(response.deleted, true);

  try {
    await todoApi.one({ name: "Todo Test" });
    t.fail("Should not resolve");
  } catch (e) {
    t.ok(AppError.instanceOf(e));
    t.equal(e.status, 400);
  }
});
