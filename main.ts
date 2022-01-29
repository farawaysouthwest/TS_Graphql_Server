import { ApolloServer } from "apollo-server";
import newApolloServer from "./src/serverFactory";
import typeDefs from "./src/schema/schema";
import resolvers from "./src/resolvers";
import datasource from "./src/datasource";

// Init Apollo Server.
const server: ApolloServer = newApolloServer(typeDefs, resolvers, datasource);

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
