import { create } from "zustand";

interface Item {
  id: number;
  duration: string;
  type: string;
  price: number;
}

interface Payment {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}

const usePaymentStore = create<Payment>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== item.id),
    })),
}));

export default usePaymentStore;
