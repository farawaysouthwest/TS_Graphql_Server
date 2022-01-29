import { Context } from "apollo-server-core";
import {
  QueryUserArgs,
  ResolversParentTypes,
  User,
} from "../../typeGen/resolvers-types";
import { Icontext } from "../serverFactory";
import { authHandler } from "../util/auth";

function getUsers(
  parent: ResolversParentTypes,
  args: QueryUserArgs,
  context: Context<Icontext>
): User | undefined {
  // check auth
  if (authHandler(context.authScope)) {
    return context.dataSources.User.getOne(args.id);
  }
  return undefined;
}

export default {
  user: getUsers,
};
