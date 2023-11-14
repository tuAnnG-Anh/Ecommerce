export interface IUser {
  _id: string;
  image: string;
  email: string;
  name: string;
  password?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export type IUsers = Pick<
  IUser,
  "email" | "name" | "isAdmin" | "createdAt" | "updatedAt"
>[];
