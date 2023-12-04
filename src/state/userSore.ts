import { create } from "zustand";

interface User {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserStore {
  users: User[];
  addUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));
