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
export const refreshToken = async () => {
  try {
    const res = await ApiClient.post("auth/refreshToken", {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const logoutApi = async () => {
  try {
    await ApiClient.post("auth/logout");
  } catch (err) {
    console.log(err);
  }
};
