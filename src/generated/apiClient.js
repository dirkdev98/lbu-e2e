// Generated by @lbu/code-gen 2020-04-21T19:22:26.239Z

import { todoMocks, unimplementedMocks } from "./mocks.js";

let _internalClient = undefined;

function checkApiClient() {
  if (_internalClient === undefined) {
    throw new Error("Initialize api client with createApiClient");
  }
}

/**
 * Should set an axios compatible api client
 * @param {AxiosInstance} instance
 */
export function createApiClient(instance) {
  _internalClient = instance;
}

function setXRequestId(headers) {
  _internalClient.defaults.headers.common["X-Request-Id"] =
    headers["x-request-id"];
}

export const todoApi = {
  /**
    * TodoAll
    * Tags:
    * Docs:
    * @return {Promise.<TodoAllResponse>}


    */
  all: async function () {
    checkApiClient();

    try {
      const response = await _internalClient.request({
        url: `todo/`,
        method: "get",
        params: {},
        data: {},
      });

      setXRequestId(response.headers);

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 405) {
        return todoMocks.allResponse();
      }
      throw e;
    }
  },

  /**
    * TodoOne
    * Tags:
    * Docs:
    * @param { TodoNameParam_Optional} params


    * @return {Promise.<TodoListResponse>}


    */
  one: async function (params) {
    checkApiClient();

    try {
      const response = await _internalClient.request({
        url: `todo/${params.name}`,
        method: "get",
        params: {},
        data: {},
      });

      setXRequestId(response.headers);

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 405) {
        return todoMocks.listResponse();
      }
      throw e;
    }
  },

  /**
    * TodoNew
    * Tags:
    * Docs:
    * @param { TodoNewBody_Optional} body


    * @return {Promise.<TodoListResponse>}


    */
  new: async function (body) {
    checkApiClient();

    try {
      const response = await _internalClient.request({
        url: `todo/`,
        method: "post",
        params: {},
        data: body,
      });

      setXRequestId(response.headers);

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 405) {
        return todoMocks.listResponse();
      }
      throw e;
    }
  },

  /**
    * TodoCreateItem
    * Tags:
    * Docs:
    * @param { TodoNameParam_Optional} params


    * @param { TodoCreateItemBody_Optional} body


    * @return {Promise.<TodoListResponse>}


    */
  createItem: async function (params, body) {
    checkApiClient();

    try {
      const response = await _internalClient.request({
        url: `todo/${params.name}/item/`,
        method: "post",
        params: {},
        data: body,
      });

      setXRequestId(response.headers);

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 405) {
        return todoMocks.listResponse();
      }
      throw e;
    }
  },

  /**
    * TodoToggleItem
    * Tags:
    * Docs:
    * @param { TodoNameParam_Optional} params


    * @param { TodoToggleItemBody_Optional} body


    * @return {Promise.<TodoListResponse>}


    */
  toggleItem: async function (params, body) {
    checkApiClient();

    try {
      const response = await _internalClient.request({
        url: `todo/${params.name}/item/toggle`,
        method: "post",
        params: {},
        data: body,
      });

      setXRequestId(response.headers);

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 405) {
        return todoMocks.listResponse();
      }
      throw e;
    }
  },

  /**
    * TodoDelete
    * Tags:
    * Docs:
    * @param { TodoNameParam_Optional} params


    * @return {Promise.<TodoDeleteResponse>}


    */
  delete: async function (params) {
    checkApiClient();

    try {
      const response = await _internalClient.request({
        url: `todo/${params.name}`,
        method: "delete",
        params: {},
        data: {},
      });

      setXRequestId(response.headers);

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 405) {
        return todoMocks.deleteResponse();
      }
      throw e;
    }
  },
};

export const unimplementedApi = {
  /**
    * UnimplementedGetUser
    * Tags:
    * Docs:
    * @return {Promise.<UnimplementedUser>}


    */
  getUser: async function () {
    checkApiClient();

    try {
      const response = await _internalClient.request({
        url: `unimplemented/user`,
        method: "get",
        params: {},
        data: {},
      });

      setXRequestId(response.headers);

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 405) {
        return unimplementedMocks.user();
      }
      throw e;
    }
  },

  /**
    * UnimplementedSettings
    * Tags:
    * Docs:
    * @return {Promise.<UnimplementedSettingsResponse>}


    */
  settings: async function () {
    checkApiClient();

    try {
      const response = await _internalClient.request({
        url: `unimplemented/settings`,
        method: "get",
        params: {},
        data: {},
      });

      setXRequestId(response.headers);

      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 405) {
        return unimplementedMocks.settingsResponse();
      }
      throw e;
    }
  },
};

export const lbuApi = {
  /**
    * LbuStructure
    * Tags: _lbu
    * Docs: Return the full generated structure as a json object.

    * @return {Promise.<*>}


    */
  structure: async function () {
    checkApiClient();

    const response = await _internalClient.request({
      url: `_lbu/structure.json`,
      method: "get",
      params: {},
      data: {},
    });

    setXRequestId(response.headers);

    return response.data;
  },
};
