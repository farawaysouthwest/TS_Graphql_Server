import { gql } from "apollo-server";

// Schema abstraction.
export default gql`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
  }
`;
