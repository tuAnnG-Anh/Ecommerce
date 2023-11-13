export interface IUser {
  id: string;
  email: string;
  name: string;
  password?: string;
  isAdmin: boolean;
  createAt: Date;
  updateAt: Date;
}
export type IUsers = Pick<IUser, "id" | "email" | "name" | "isAdmin">[];
