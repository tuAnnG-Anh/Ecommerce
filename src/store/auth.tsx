import { IUser, IUsers } from "@/interfaces/IUser";
import { create } from "zustand";
interface AuthState {
  user: IUsers;
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
  user: initialState,
  updateAuth: (user, accessToken, refreshToken) =>
    set((state) => ({
      ...state,
      user: { ...user, accessToken, refreshToken },
    })),
  removeAuth: () => set({ user: initialState }),
}));
