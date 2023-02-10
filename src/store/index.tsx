import { create } from "zustand";
import { CardProps } from "../components/molecules/Card";

type Store = {
  showModal: boolean;
  content: CardProps | {};
  toggleModal: () => void;
  openModal: () => void;
};

export const zuStore = create((set) => ({
  showModal: false,
  content: {},
  toggleModal: () =>
    set((state: Store) => {
      return { showModal: !state.showModal };
    }),
  openModal: (content: CardProps) => set(() => ({ showModal: true, content })),
}));
