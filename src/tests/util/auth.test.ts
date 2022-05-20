import { ExpressContext } from "apollo-server-express";
import { checkAuth, headerHandler } from "../../util/auth";

describe("Test Auth Utils", () => {
  let testContext: ExpressContext;

  beforeEach(
    () =>
      (testContext = {
        req: { headers: { authorization: "valid" } },
      } as ExpressContext)
  );

  it("tests headerHandler", () => {
    const token = headerHandler(testContext);

    expect(token.authScope).toBe(testContext.req.headers.authorization);
  });

  it("tests headerHandler with no auth header", () => {
    testContext.req.headers.authorization = "";

    const token = headerHandler(testContext);

    expect(token.authScope).toBe(testContext.req.headers.authorization);
  });

  it("tests authHandler with valid token", () => {
    const result = checkAuth(testContext.req.headers.authorization as string);

    expect(result).toBeTruthy();
  });
});
