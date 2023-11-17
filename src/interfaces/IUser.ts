export interface IUser {
  _id: string;
  avatar: string;
  email: string;
  name: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
  refreshToken: string;
}
export type IUsers = Pick<
  IUser,
  "avatar" | "email" | "name" | "isAdmin" | "accessToken" | "refreshToken"
>;
export type IAccount = Pick<IUser, "email" | "password">;
