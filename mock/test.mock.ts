import { defineMock } from "./base";

export default defineMock([
  {
    url: "/test",
    method: ["GET"],
    body: {
      code: "00000",
      msg: "一切ok",
    },
  }
]);
