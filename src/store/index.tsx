import { create, StoreApi, UseBoundStore } from 'zustand';
// import { CardProps } from '../components/molecules/Card';

// type Store = {
//   showModal: boolean;
//   content: CardProps | Record<string, never>;
//   toggleModal: () => void;
//   openModal: () => void;
// };

const zuStore = create((set) => ({
  modal: {
    goBack: undefined,
  },
  setGoBack: (path: string) => set((state: UseBoundStore<StoreApi<unknown>>) => ({
    ...state,
    modal: { ...state.modal, goBack: path },
  })),
}));

export default zuStore;
