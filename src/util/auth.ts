import { ExpressContext } from "apollo-server-express";
import {
  ResolversParentTypes,
  QueryUserArgs,
} from "../../typeGen/resolvers-types";
import { Icontext } from "../serverFactory";
import { Context } from "apollo-server-core";
import { AuthenticationError } from "apollo-server";

export function headerHandler({ req }: ExpressContext) {
  return {
    authScope: req.headers.authorization || "",
  };
}

// generic resolver function signature.
type resolverSig = (
  parent: ResolversParentTypes,
  args: QueryUserArgs,
  context: Context<Icontext>
) => any;

export function checkAuth(resolver: resolverSig): resolverSig {
  // return a checker function with the same params as a resolver.
  return (parent, args, context) => {
    // replace with a real JWT checking lib of your choice.
    if (!context.authScope) {
      throw new AuthenticationError("no token");
    }

    // continue execution of the resolver.
    return resolver(parent, args, context);
  };
}
