import { User } from "./user_api_model";

export interface Auth {
  user: User;
  jwt: string;
}
