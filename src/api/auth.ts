import { IAccount } from "@/interfaces/IUser";
import { ApiClient } from "@/utils/ApiClient";

export const loginApi = async (user: IAccount) => {
  try {
    const res = await ApiClient.post("auth/login", user);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
