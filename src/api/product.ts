import { ApiClient } from "@/utils/ApiClient";

export const createProduct = async (accessToken: string) => {
  try {
    const response = await ApiClient.get("/product/create", {
      headers: {
        Token: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
