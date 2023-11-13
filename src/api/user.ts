// import { IUser } from "@/interfaces/IUser";
// import { IUsers } from "@/interfaces/IUser";
import { ApiClient } from "@/utils/ApiClient";

export const getUser = async (page: number | string, limit: number | string) =>
  await ApiClient.get("user", {
    params: {
      _page: page,
      _size: limit,
    },
  });
// .then((res) => res.data);

// export const updateUser = async (id: number | string, user: IUser) => {
//   await ApiClient.post("");
// };

export const deleteUser = async (id: number | string) => {
  await ApiClient.delete(`user/${id}`);
};