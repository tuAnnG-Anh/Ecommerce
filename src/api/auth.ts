import { IAccount } from "@/interfaces/IUser";
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
  const res = await instance.post("auth/refreshToken");
  return res.data;
};
export const logoutApi = async () => {
  try {
    await instance.post("auth/logout");
  } catch (err) {
    console.log(err);
  }
};
