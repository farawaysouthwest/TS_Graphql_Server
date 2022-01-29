import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import { UserDAO } from "./user";

// interface for all DAO objects.
export interface IdataSources {
  User: UserDAO;
}

// datasource abstraction.
export default (): DataSources<IdataSources> => {
  return {
    User: new UserDAO(),
  };
};
