import { TypeCreator } from "@lbu/code-gen";

/**
 * @param {App} app
 */
export function unimplementedModel(app) {
  const M = new TypeCreator("unimplemented");
  const router = M.router("/unimplemented");

  const userModel = M.object("User", {
    id: M.uuid(),
    name: M.string().mock(`__.first() + " " + __.last()`),
    age: M.number().integer().mock("__.age()"),
  });

  const settingsModel = M.object({
    darkMode: M.bool().default(true),
    preferredNumber: M.number().integer().convert().min(0).max(10),
    direction: M.string("WindDirection")
      .oneOf("NORTH", "EAST", "SOUTH", "WEST")
      .default(`"NORTH"`),
    totalMess: M.array(
      M.anyOf([
        M.number().optional().min(1).max(150),
        M.string()
          .default("new Date().toISOString()")
          .mock("new Date(__.timestamp() * 1000).toISOString()"),
        M.array(M.bool().optional().convert().default(false)),
        M.object({
          foo: M.bool().optional(),
        }),
      ]),
    ),
  });

  app.add(router.get("/user", "getUser").response(userModel));
  app.add(router.get("/settings", "settings").response(settingsModel));
}
