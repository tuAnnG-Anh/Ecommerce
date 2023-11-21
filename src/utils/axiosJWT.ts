import { refreshToken } from "@/api/auth";
import { useAuthStore } from "@/store/auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const axiosJWT = axios.create();
axiosJWT.interceptors.request.use(
  async (config) => {
    const { userLogged, updateAuth } = useAuthStore();
    const date = new Date();
    const accessToken = localStorage.getItem("accessToken");
    const decoded = jwtDecode(accessToken as string);
    if (decoded?.exp && decoded.exp > date.getTime() / 1000) {
      const data = await refreshToken();
      const refreshUser = {
        ...userLogged,
        accessToken: data.accessToken,
      };
      updateAuth(refreshUser);
      config.headers["token"] = "Bearer" + data.accessToken;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
