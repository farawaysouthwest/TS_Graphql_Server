import { ExpressContext } from "apollo-server-express";
import { headerHandler } from "../../util/auth";

describe("Test Auth Utils", () => {
  let testContext: ExpressContext;

  beforeEach(
    () =>
      (testContext = {
        req: { headers: { authorization: "test" } },
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
});
