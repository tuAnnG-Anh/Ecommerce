import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { IUser } from "@/interfaces/IUser";
interface AuthState {
  userLogged: any;
  updateAuth: (state: IUser) => void;
  removeAuth: () => void;
}

const log = (config: any) => (set: any, get: any, api: any) =>
  config(
    (...args: any[]) => {
      console.log("  applying", args);
      set(...args);
      console.log("  new state", get());
    },
    get,
    api
  );
export const useAuthStore = create<AuthState>()(
  devtools(
    log(
      persist(
        (set: any) => ({
          userLogged: null,
          updateAuth: (userLogged: any) =>
            set((state: any) => ({
              ...state,
              userLogged: { ...userLogged },
            })),
          removeAuth: () => set({ userLogged: null }),
        }),
        {
          name: "userLoggedStorage",
          storage: createJSONStorage(() => sessionStorage),
        }
      )
    )
  )
);
