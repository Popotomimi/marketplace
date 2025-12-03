import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserInterface } from "../interfaces/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SetSessionParams {
  user: UserInterface;
  token: string;
  refreshToken: string;
}

interface UpdateTokenParams {
  token: string;
  refreshToken: string;
}

export interface UserStore {
  user: UserInterface | null;
  token: string | null;
  refreshToken: string | null;

  setSession: (sessionData: SetSessionParams) => void;
  logout: () => void;
  updateTokens: (updateTokensData: UpdateTokenParams) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,

      logout: () =>
        set({
          user: null,
          token: null,
          refreshToken: null,
        }),
      setSession: (sessionData) => set({ ...sessionData }),
      updateTokens: (updateTokensData) => set({ ...updateTokensData }),
    }),
    {
      name: "marketplace-auth",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
