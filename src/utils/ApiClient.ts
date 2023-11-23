import { refreshToken } from "@/api/auth";
import { notification } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import lodash from "lodash";

export const ApiClient = axios.create({
  baseURL: "http://localhost:3001/api/",
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
      localStorage.getItem("accessToken") as string
    );
    const date = new Date();
    const decoded = jwtDecode(accessToken as string);
    if (decoded?.exp && decoded.exp < date.getTime() / 1000) {
      const data = await refreshToken();
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
    if (lodash.get(error, "response.status") === 403) {
      notification.error({
        message: "Phiên làm việc hết hạn. Vui lòng làm mới trình duyệt",
        key: "TOKEN_EXPIRED",
      });
      // window.location.href = "/login";
    } else if (lodash.get(error, "response.status") >= 500) {
      notification.error({
        message: "Máy chủ gặp sự cố. Vui lòng thử lại sau",
        key: "server_error",
      });
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
