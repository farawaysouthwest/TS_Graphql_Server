import { Context } from "apollo-server-core";
import {
  QueryUserArgs,
  ResolversParentTypes,
  User,
} from "../../typeGen/resolvers-types";
import { Icontext } from "../serverFactory";
import { checkAuth } from "../util/auth";

function getUsers(
  parent: ResolversParentTypes,
  args: QueryUserArgs,
  context: Context<Icontext>
): User | undefined {
  // check auth
  return context.dataSources.User.getOne(args.id);
}

export default {
  user: checkAuth(getUsers),
};
