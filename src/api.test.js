import { log } from "@lbu/insight";
import axios from "axios";
import test from "tape";
import {
  createApiClient,
  todoApi,
  unimplementedApi,
} from "./generated/apiClient.js";
import { todoValidators } from "./generated/validators.js";

createApiClient(
  axios.create({
    baseURL: "http://localhost:3000",
  }),
);

test("todo#all", async (t) => {
  const response = await todoApi.all();
  t.deepLooseEqual(response, todoValidators.allResponse(response));
});

test("todo#one", async (t) => {
  const response = await todoApi.one({ name: "Default List" });

  t.deepLooseEqual(response, todoValidators.listResponse(response));
});

test("todo#new", async (t) => {
  const postResponse = await todoApi.new({ name: "Todo Test" });

  t.deepLooseEqual(postResponse, todoValidators.listResponse(postResponse));

  const getResponse = await todoApi.one({ name: "Todo Test" });
  t.deepLooseEqual(getResponse, postResponse);
});

test("todo#createItem", async (t) => {
  const response = await todoApi.createItem(
    { name: "Todo Test" },
    { name: "TodoItem 1" },
  );

  t.deepLooseEqual(response, todoValidators.listResponse(response));
});

test("todo#toggleItem", async (t) => {
  let response = await todoApi.toggleItem(
    {
      name: "Todo Test",
    },
    { index: "0" },
  );

  t.deepLooseEqual(response, todoValidators.listResponse(response));
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
    t.fail("Should nog resolve");
  } catch (e) {
    t.equal(e.response.status, 400);
  }
});

test("unimplemented", async () => {
  log.info({
    user: await unimplementedApi.getUser(),
    settings: await unimplementedApi.settings(),
  });
});
