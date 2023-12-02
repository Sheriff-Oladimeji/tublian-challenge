import { create } from "zustand";

interface Item {
  id: number;
  duration: string;
  type: string;
  price: number;
}


interface Payment {
  item: Item | null;
  addItem: (item: Item) => void;
  removeItem: () => void;
}

const usePaymentStore = create<Payment>((set) => ({
  item: null,
  addItem: (item) => set(() => ({ item })),
  removeItem: () => set(() => ({ item: null })),
}));

export default usePaymentStore;
