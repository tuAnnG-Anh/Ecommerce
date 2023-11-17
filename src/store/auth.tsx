import { IUser, IUsers } from "@/interfaces/IUser";
import { create } from "zustand";
interface AuthState {
  userLogged: IUsers;
  updateAuth: (state: IUser, accessToken: string, refreshToken: string) => void;
  removeAuth: () => void;
}
const initialState: IUsers = {
  avatar: "",
  email: "",
  name: "",
  isAdmin: false,
  accessToken: "",
  refreshToken: "",
};
export const authStore = create<AuthState>((set) => ({
  userLogged: initialState,
  updateAuth: (userLogged, accessToken, refreshToken) =>
    set((state) => ({
      ...state,
      userLogged: { ...userLogged, accessToken, refreshToken },
    })),
  removeAuth: () => set({ userLogged: initialState }),
}));
