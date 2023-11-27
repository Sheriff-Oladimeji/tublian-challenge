import { create } from "zustand";


const useStore = create((set) => ({
  item : {},
  addItem: () => set((state : {}) => ({})),
  removeItem: () => set({ bears: 0 }),
}));
