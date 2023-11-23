import { IAccount } from "@/interfaces/IUser";
import { ApiClient } from "@/utils/ApiClient";
import { instance } from "@/utils/axiosJWT";

export const loginApi = async (user: IAccount) => {
  try {
    const res = await instance.post("auth/login", user);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const refreshToken = async () => {
  try {
    const res = await instance.post("auth/refreshToken", {
      withCredentials: true, // Điều này là quan trọng để bật việc gửi cookie
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
