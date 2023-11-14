import { ApiClient } from "@/utils/ApiClient";
import { IUser } from "@/interfaces/IUser";

export const Login = async (user: IUser) =>
  await ApiClient.get("auth/login", user);
