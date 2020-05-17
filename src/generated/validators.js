// Generated by @lbu/code-gen at 2020-05-17T19:27:56.466Z
/* eslint-disable no-unused-vars */

export const validatorHooks = {};

const isNil = (value) => value === undefined || value === null;

/**
 * This function should not throw as the corresponding validator will do that
 * @callback ValidationErrorFn
 * @param {string} key
 * @param {Object} info
 */

/**
 * @type ValidationErrorFn
 */
let _errorFn = (key, info) => {
  const err = new Error(`ValidationError: ${key}`);
  err.key = key;
  err.info = info;

  return err;
};

/**
 * Set a different error function, for example AppError.validationError
 * @param {ValidationErrorFn} fn
 */
export function validatorSetErrorFn(fn) {
  _errorFn = fn;
}

export const todoValidators = {
  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoList}
   */
  list: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoList" in validatorHooks) {
      result = validatorHooks["preValidateTodoList"](result);
    }

    result = objectValidator0(result, propertyPath);

    if ("postValidateTodoList" in validatorHooks) {
      return validatorHooks["postValidateTodoList"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoCollection}
   */
  collection: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoCollection" in validatorHooks) {
      result = validatorHooks["preValidateTodoCollection"](result);
    }

    result = genericValidator4(result, propertyPath);

    if ("postValidateTodoCollection" in validatorHooks) {
      return validatorHooks["postValidateTodoCollection"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoItem}
   */
  item: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoItem" in validatorHooks) {
      result = validatorHooks["preValidateTodoItem"](result);
    }

    result = objectValidator6(result, propertyPath);

    if ("postValidateTodoItem" in validatorHooks) {
      return validatorHooks["postValidateTodoItem"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoAllResponse}
   */
  allResponse: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoAllResponse" in validatorHooks) {
      result = validatorHooks["preValidateTodoAllResponse"](result);
    }

    result = objectValidator8(result, propertyPath);

    if ("postValidateTodoAllResponse" in validatorHooks) {
      return validatorHooks["postValidateTodoAllResponse"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoNameParam}
   */
  nameParam: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoNameParam" in validatorHooks) {
      result = validatorHooks["preValidateTodoNameParam"](result);
    }

    result = objectValidator10(result, propertyPath);

    if ("postValidateTodoNameParam" in validatorHooks) {
      return validatorHooks["postValidateTodoNameParam"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoListResponse}
   */
  listResponse: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoListResponse" in validatorHooks) {
      result = validatorHooks["preValidateTodoListResponse"](result);
    }

    result = objectValidator12(result, propertyPath);

    if ("postValidateTodoListResponse" in validatorHooks) {
      return validatorHooks["postValidateTodoListResponse"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoNewBody}
   */
  newBody: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoNewBody" in validatorHooks) {
      result = validatorHooks["preValidateTodoNewBody"](result);
    }

    result = objectValidator13(result, propertyPath);

    if ("postValidateTodoNewBody" in validatorHooks) {
      return validatorHooks["postValidateTodoNewBody"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoCreateItemBody}
   */
  createItemBody: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoCreateItemBody" in validatorHooks) {
      result = validatorHooks["preValidateTodoCreateItemBody"](result);
    }

    result = objectValidator15(result, propertyPath);

    if ("postValidateTodoCreateItemBody" in validatorHooks) {
      return validatorHooks["postValidateTodoCreateItemBody"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoToggleItemBody}
   */
  toggleItemBody: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoToggleItemBody" in validatorHooks) {
      result = validatorHooks["preValidateTodoToggleItemBody"](result);
    }

    result = objectValidator17(result, propertyPath);

    if ("postValidateTodoToggleItemBody" in validatorHooks) {
      return validatorHooks["postValidateTodoToggleItemBody"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { TodoDeleteResponse}
   */
  deleteResponse: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateTodoDeleteResponse" in validatorHooks) {
      result = validatorHooks["preValidateTodoDeleteResponse"](result);
    }

    result = objectValidator19(result, propertyPath);

    if ("postValidateTodoDeleteResponse" in validatorHooks) {
      return validatorHooks["postValidateTodoDeleteResponse"](result);
    } else {
      return result;
    }
  },
};

export const unimplementedValidators = {
  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { UnimplementedUser}
   */
  user: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateUnimplementedUser" in validatorHooks) {
      result = validatorHooks["preValidateUnimplementedUser"](result);
    }

    result = objectValidator21(result, propertyPath);

    if ("postValidateUnimplementedUser" in validatorHooks) {
      return validatorHooks["postValidateUnimplementedUser"](result);
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { UnimplementedSettingsResponse}
   */
  settingsResponse: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateUnimplementedSettingsResponse" in validatorHooks) {
      result = validatorHooks["preValidateUnimplementedSettingsResponse"](
        result,
      );
    }

    result = objectValidator26(result, propertyPath);

    if ("postValidateUnimplementedSettingsResponse" in validatorHooks) {
      return validatorHooks["postValidateUnimplementedSettingsResponse"](
        result,
      );
    } else {
      return result;
    }
  },

  /**
   *
   * @param {*} value
   * @param {string} [propertyPath]
   * @returns { UnimplementedWindDirection}
   */
  windDirection: (value, propertyPath = "$") => {
    let result = value;

    if ("preValidateUnimplementedWindDirection" in validatorHooks) {
      result = validatorHooks["preValidateUnimplementedWindDirection"](result);
    }

    result = stringValidator38(result, propertyPath);

    if ("postValidateUnimplementedWindDirection" in validatorHooks) {
      return validatorHooks["postValidateUnimplementedWindDirection"](result);
    } else {
      return result;
    }
  },
};

export const lbuValidators = {};

function stringValidator1(value, propertyPath, parentType = "string") {
  if (isNil(value)) {
    throw _errorFn("validator.string.undefined", { propertyPath });
  }

  if (typeof value !== "string") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  return value;
}

function referenceValidator3(value, propertyPath, parentType = "reference") {
  if (isNil(value)) {
    throw _errorFn("validator.reference.undefined", { propertyPath });
  }

  return todoValidators.item(value, propertyPath);
}

function arrayValidator2(value, propertyPath, parentType = "array") {
  if (isNil(value)) {
    throw _errorFn("validator.array.undefined", { propertyPath });
  }

  if (!Array.isArray(value)) {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = [];

  for (let i = 0; i < value.length; ++i) {
    result.push(referenceValidator3(value[i], propertyPath + "[" + i + "]"));
  }

  return result;
}

function objectValidator0(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["name"] = stringValidator1(value["name"], propertyPath + "." + "name");

  result["items"] = arrayValidator2(
    value["items"],
    propertyPath + "." + "items",
  );

  return result;
}

function referenceValidator5(value, propertyPath, parentType = "reference") {
  if (isNil(value)) {
    throw _errorFn("validator.reference.undefined", { propertyPath });
  }

  return todoValidators.list(value, propertyPath);
}

function genericValidator4(value, propertyPath, parentType = "generic") {
  if (isNil(value)) {
    throw _errorFn("validator.generic.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);
  for (const key of Object.keys(value)) {
    const validatedKey = stringValidator1(key, propertyPath + ".$key");
    const validatedValue = referenceValidator5(
      value[key],
      propertyPath + ".$value",
    );

    result[validatedKey] = validatedValue;
  }

  return result;
}

function booleanValidator7(value, propertyPath, parentType = "boolean") {
  if (isNil(value)) {
    return false;
  }

  if (typeof value !== "boolean") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  return value;
}

function objectValidator6(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["completed"] = booleanValidator7(
    value["completed"],
    propertyPath + "." + "completed",
  );

  result["name"] = stringValidator1(value["name"], propertyPath + "." + "name");

  return result;
}

function referenceValidator9(value, propertyPath, parentType = "reference") {
  if (isNil(value)) {
    throw _errorFn("validator.reference.undefined", { propertyPath });
  }

  return todoValidators.collection(value, propertyPath);
}

function objectValidator8(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["store"] = referenceValidator9(
    value["store"],
    propertyPath + "." + "store",
  );

  return result;
}

function stringValidator11(value, propertyPath, parentType = "string") {
  if (isNil(value)) {
    throw _errorFn("validator.string.undefined", { propertyPath });
  }

  if (typeof value !== "string") {
    value = String(value);
  }

  if (typeof value !== "string") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  value = value.trim();

  if (value.length < 0) {
    const min = 0;
    throw _errorFn(`validator.${parentType}.min`, { propertyPath, min });
  }

  if (value.length > 30) {
    const max = 30;
    throw _errorFn(`validator.${parentType}.max`, { propertyPath, max });
  }

  return value;
}

function objectValidator10(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["name"] = stringValidator11(
    value["name"],
    propertyPath + "." + "name",
  );

  return result;
}

function objectValidator12(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["todo"] = referenceValidator5(
    value["todo"],
    propertyPath + "." + "todo",
  );

  return result;
}

function stringValidator14(value, propertyPath, parentType = "string") {
  if (isNil(value)) {
    throw _errorFn("validator.string.undefined", { propertyPath });
  }

  if (typeof value !== "string") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  value = value.trim();

  if (value.length < 1) {
    const min = 1;
    throw _errorFn(`validator.${parentType}.min`, { propertyPath, min });
  }

  if (value.length > 40) {
    const max = 40;
    throw _errorFn(`validator.${parentType}.max`, { propertyPath, max });
  }

  return value;
}

function objectValidator13(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["name"] = stringValidator14(
    value["name"],
    propertyPath + "." + "name",
  );

  return result;
}

function stringValidator16(value, propertyPath, parentType = "string") {
  if (isNil(value)) {
    throw _errorFn("validator.string.undefined", { propertyPath });
  }

  if (typeof value !== "string") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  value = value.trim();

  if (value.length < 1) {
    const min = 1;
    throw _errorFn(`validator.${parentType}.min`, { propertyPath, min });
  }

  if (value.length > 365) {
    const max = 365;
    throw _errorFn(`validator.${parentType}.max`, { propertyPath, max });
  }

  return value;
}

function objectValidator15(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["name"] = stringValidator16(
    value["name"],
    propertyPath + "." + "name",
  );

  return result;
}

function numberValidator18(value, propertyPath, parentType = "number") {
  if (isNil(value)) {
    throw _errorFn("validator.number.undefined", { propertyPath });
  }

  if (typeof value !== "number") {
    value = Number(value);
  }

  if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  if (!Number.isInteger(value)) {
    throw _errorFn(`validator.${parentType}.integer`, { propertyPath });
  }

  if (value < 0) {
    const min = 0;
    throw _errorFn(`validator.${parentType}.min`, { propertyPath, min });
  }

  return value;
}

function objectValidator17(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["index"] = numberValidator18(
    value["index"],
    propertyPath + "." + "index",
  );

  return result;
}

function booleanValidator20(value, propertyPath, parentType = "boolean") {
  if (isNil(value)) {
    throw _errorFn("validator.boolean.undefined", { propertyPath });
  }

  if (typeof value !== "boolean") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  return value;
}

function objectValidator19(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["deleted"] = booleanValidator20(
    value["deleted"],
    propertyPath + "." + "deleted",
  );

  return result;
}

function stringValidator23(value, propertyPath, parentType = "string") {
  if (isNil(value)) {
    throw _errorFn("validator.string.undefined", { propertyPath });
  }

  if (typeof value !== "string") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  value = value.trim();

  if (value.length < 36) {
    const min = 36;
    throw _errorFn(`validator.${parentType}.min`, { propertyPath, min });
  }

  if (value.length > 36) {
    const max = 36;
    throw _errorFn(`validator.${parentType}.max`, { propertyPath, max });
  }

  value = value.toLowerCase();

  if (
    !/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$/gi.test(
      value,
    )
  ) {
    throw _errorFn(`validator.${parentType}.pattern`, { propertyPath });
  }

  return value;
}

function uuidValidator22(value, propertyPath, parentType = "uuid") {
  if (isNil(value)) {
    throw _errorFn("validator.uuid.undefined", { propertyPath });
  }

  return stringValidator23(value, propertyPath, parentType);
}

function stringValidator24(value, propertyPath, parentType = "string") {
  if (isNil(value)) {
    throw _errorFn("validator.string.undefined", { propertyPath });
  }

  if (typeof value !== "string") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  return value;
}

function numberValidator25(value, propertyPath, parentType = "number") {
  if (isNil(value)) {
    throw _errorFn("validator.number.undefined", { propertyPath });
  }

  if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  if (!Number.isInteger(value)) {
    throw _errorFn(`validator.${parentType}.integer`, { propertyPath });
  }

  return value;
}

function objectValidator21(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["id"] = uuidValidator22(value["id"], propertyPath + "." + "id");

  result["name"] = stringValidator24(
    value["name"],
    propertyPath + "." + "name",
  );

  result["age"] = numberValidator25(value["age"], propertyPath + "." + "age");

  return result;
}

function booleanValidator27(value, propertyPath, parentType = "boolean") {
  if (isNil(value)) {
    return true;
  }

  if (typeof value !== "boolean") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  return value;
}

function numberValidator28(value, propertyPath, parentType = "number") {
  if (isNil(value)) {
    throw _errorFn("validator.number.undefined", { propertyPath });
  }

  if (typeof value !== "number") {
    value = Number(value);
  }

  if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  if (!Number.isInteger(value)) {
    throw _errorFn(`validator.${parentType}.integer`, { propertyPath });
  }

  if (value < 0) {
    const min = 0;
    throw _errorFn(`validator.${parentType}.min`, { propertyPath, min });
  }

  if (value > 10) {
    const max = 10;
    throw _errorFn(`validator.${parentType}.max`, { propertyPath, max });
  }

  return value;
}

function referenceValidator29(value, propertyPath, parentType = "reference") {
  if (isNil(value)) {
    throw _errorFn("validator.reference.undefined", { propertyPath });
  }

  return unimplementedValidators.windDirection(value, propertyPath);
}

function numberValidator32(value, propertyPath, parentType = "number") {
  if (isNil(value)) {
    return;
  }

  if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  if (value < 1) {
    const min = 1;
    throw _errorFn(`validator.${parentType}.min`, { propertyPath, min });
  }

  if (value > 150) {
    const max = 150;
    throw _errorFn(`validator.${parentType}.max`, { propertyPath, max });
  }

  return value;
}

function stringValidator33(value, propertyPath, parentType = "string") {
  if (isNil(value)) {
    return new Date().toISOString();
  }

  if (typeof value !== "string") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  return value;
}

function booleanValidator35(value, propertyPath, parentType = "boolean") {
  if (isNil(value)) {
    return false;
  }

  if (typeof value !== "boolean") {
    if (value === "true" || value === 1) {
      value = true;
    } else if (value === "false" || value === 0) {
      value = false;
    }
  }

  if (typeof value !== "boolean") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  return value;
}

function arrayValidator34(value, propertyPath, parentType = "array") {
  if (isNil(value)) {
    throw _errorFn("validator.array.undefined", { propertyPath });
  }

  if (!Array.isArray(value)) {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = [];

  for (let i = 0; i < value.length; ++i) {
    result.push(booleanValidator35(value[i], propertyPath + "[" + i + "]"));
  }

  return result;
}

function booleanValidator37(value, propertyPath, parentType = "boolean") {
  if (isNil(value)) {
    return;
  }

  if (typeof value !== "boolean") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  return value;
}

function objectValidator36(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["foo"] = booleanValidator37(value["foo"], propertyPath + "." + "foo");

  return result;
}

function anyOfValidator31(value, propertyPath, parentType = "anyOf") {
  if (isNil(value)) {
    throw _errorFn("validator.anyOf.undefined", { propertyPath });
  }

  const errors = [];

  try {
    return numberValidator32(value, propertyPath);
  } catch (e) {
    errors.push({
      name: e.name,
      message: e.message,
      key: e.key,
      info: e.info,
    });
  }

  try {
    return stringValidator33(value, propertyPath);
  } catch (e) {
    errors.push({
      name: e.name,
      message: e.message,
      key: e.key,
      info: e.info,
    });
  }

  try {
    return arrayValidator34(value, propertyPath);
  } catch (e) {
    errors.push({
      name: e.name,
      message: e.message,
      key: e.key,
      info: e.info,
    });
  }

  try {
    return objectValidator36(value, propertyPath);
  } catch (e) {
    errors.push({
      name: e.name,
      message: e.message,
      key: e.key,
      info: e.info,
    });
  }

  throw _errorFn(`validator.${parentType}.type`, { propertyPath, errors });
}

function arrayValidator30(value, propertyPath, parentType = "array") {
  if (isNil(value)) {
    throw _errorFn("validator.array.undefined", { propertyPath });
  }

  if (!Array.isArray(value)) {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = [];

  for (let i = 0; i < value.length; ++i) {
    result.push(anyOfValidator31(value[i], propertyPath + "[" + i + "]"));
  }

  return result;
}

function objectValidator26(value, propertyPath, parentType = "object") {
  if (isNil(value)) {
    throw _errorFn("validator.object.undefined", { propertyPath });
  }

  if (typeof value !== "object") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  const result = Object.create(null);

  result["darkMode"] = booleanValidator27(
    value["darkMode"],
    propertyPath + "." + "darkMode",
  );

  result["preferredNumber"] = numberValidator28(
    value["preferredNumber"],
    propertyPath + "." + "preferredNumber",
  );

  result["direction"] = referenceValidator29(
    value["direction"],
    propertyPath + "." + "direction",
  );

  result["totalMess"] = arrayValidator30(
    value["totalMess"],
    propertyPath + "." + "totalMess",
  );

  return result;
}

function stringValidator38(value, propertyPath, parentType = "string") {
  if (isNil(value)) {
    return "NORTH";
  }

  if (typeof value !== "string") {
    throw _errorFn(`validator.${parentType}.type`, { propertyPath });
  }

  if (
    value !== "NORTH" &&
    value !== "EAST" &&
    value !== "SOUTH" &&
    value !== "WEST"
  ) {
    const oneOf = "NORTH, EAST, SOUTH, WEST";
    throw _errorFn(`validator.${parentType}.oneOf`, { propertyPath, oneOf });
  }

  return value;
}
