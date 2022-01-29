import { gql } from "apollo-server";
import { GraphQLSchema } from "graphql";

// Schema abstraction.
export default gql`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
  }
`;
