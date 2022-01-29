import { ApolloServer } from "apollo-server";
import { IResolvers } from "@graphql-tools/utils";
import { DocumentNode } from "graphql";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { IdataSources } from "./datasource";
import { ExpressContext } from "apollo-server-express";
import { headerHandler } from "./util/auth";

export interface Icontext {
  dataSources: IdataSources;
  authScope: string;
}

export default function newApolloServer(
  typeDefs: DocumentNode,
  resolvers: IResolvers<any>,
  datasource: () => DataSources<IdataSources>
): ApolloServer {
  return new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: headerHandler,
    dataSources: datasource,
  });
}
