import { create } from 'zustand';
import { CardProps } from '../components/molecules/Card';

type Store = {
  showModal: boolean;
  content: CardProps | Record<string, never>;
  toggleModal: () => void;
  openModal: () => void;
};

const zuStore = create((set) => ({
  showModal: false,
  content: {},
  toggleModal: () => set((state: Store) => ({ showModal: !state.showModal })),
  openModal: (content: CardProps) => set(() => ({ showModal: true, content })),
}));

export default zuStore;
