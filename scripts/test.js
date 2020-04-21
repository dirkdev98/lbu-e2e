import { log } from "@lbu/insight";
import { mainFn } from "@lbu/stdlib";
import axios from "axios";
import tape from "tape";
import promiseWrap from "tape-promise";
import {
  createApiClient,
  todoApi,
  unimplementedApi,
} from "../src/generated/apiClient.js";
import { todoValidators } from "../src/generated/validators.js";

mainFn(import.meta, log, main);

async function main() {
  const test = promiseWrap.default(tape);

  createApiClient(
    axios.create({
      baseURL: "http://localhost:3000",
    })
  );

  test("todo#all", async (t) => {
    const response = await todoApi.all();

    t.deepEqual(response, todoValidators.allResponse(response));

    t.end();
  });

  test("todo#one", async (t) => {
    const response = await todoApi.one({ name: "Default List" });

    t.deepEqual(response, todoValidators.listResponse(response));

    t.end();
  });

  test("todo#new", async (t) => {
    const postResponse = await todoApi.new({ name: "Todo Test" });

    t.deepEqual(postResponse, todoValidators.listResponse(postResponse));

    const getResponse = await todoApi.one({ name: "Todo Test" });
    t.deepEqual(getResponse, postResponse);

    t.end();
  });

  test("todo#createItem", async (t) => {
    const response = await todoApi.createItem(
      { name: "Todo Test" },
      { name: "TodoItem 1" }
    );

    t.deepEqual(response, todoValidators.listResponse(response));

    t.end();
  });

  test("todo#toggleItem", async (t) => {
    let response = await todoApi.toggleItem(
      {
        name: "Todo Test",
      },
      { index: "0" }
    );

    t.deepEqual(response, todoValidators.listResponse(response));
    t.equal(response.todo.items[0].completed, true, "item completed");

    response = await todoApi.toggleItem(
      {
        name: "Todo Test",
      },
      {
        index: 0,
      }
    );
    t.equal(response.todo.items[0].completed, false);

    t.end();
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

    t.end();
  });

  test("unimplemented", async (t) => {
    log.info({
      user: await unimplementedApi.getUser(),
      settings: await unimplementedApi.settings(),
    });

    t.end();
  });
}
