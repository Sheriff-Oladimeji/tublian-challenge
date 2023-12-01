import { create } from "zustand";

interface Item {
  id: number;
  duration: string;
  type: string;
  price: number;
}

type Payment =  {
  item: Item[],
  addItem: () => void
  removeItem: () => void
}


const usePaymentStore = create<Payment>((set, get) => ({
  item: [],
  add: ()=>{}
}))
