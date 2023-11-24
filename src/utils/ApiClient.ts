import { refreshToken } from "@/api/auth";
import { notification } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import lodash from "lodash";

export const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
ApiClient.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const accessToken = JSON.parse(
      JSON.stringify(localStorage.getItem("accessToken"))
    );
    const date = new Date();
    const decoded = jwtDecode(accessToken);
    if (decoded?.exp && decoded.exp < date.getTime() / 1000) {
      const data = await refreshToken();
      JSON.stringify(localStorage.setItem("accessToken", data.accessToken));
      config.headers["Token"] = `Bearer ${data.accessToken}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
ApiClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      notification.error({
        message: "Session expired. Please refresh your browser",
        key: "TOKEN_EXPIRED",
      });
      setTimeout(() => (window.location.href = "/login"), 2000);
    } else if (lodash.get(error, "response.status") >= 500) {
      notification.error({
        message: "The server encountered a problem. Please try again later",
        key: "server_error",
      });
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
