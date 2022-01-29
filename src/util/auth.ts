import { ExpressContext } from "apollo-server-express";

export function headerHandler({ req }: ExpressContext) {
  return {
    authScope: req.headers.authorization || "",
  };
}

export function authHandler(token: string): boolean {
  return true;
}
