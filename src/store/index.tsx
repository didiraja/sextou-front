import { create, StoreApi, UseBoundStore } from 'zustand';

export interface IStore {
  goBack: string;
  setGoBack: (P: string) => void;
}

const zuStore: UseBoundStore<StoreApi<IStore>> = create((set) => ({
  goBack: '/',
  setGoBack: (path: string) => set(() => ({ goBack: path })),
}));

export default zuStore;
