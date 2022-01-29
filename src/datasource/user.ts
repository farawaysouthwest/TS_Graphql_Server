import { DataSource } from "apollo-datasource";
import { User } from "../../typeGen/resolvers-types";

export class UserDAO extends DataSource {
  public getOne(id: string): User | undefined {
    return { id: "223" } as User;
  }
}
