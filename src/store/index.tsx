import { create } from 'zustand';

const zuStore = create((set) => ({
  goBack: '/',
  setGoBack: (path: string) => set(() => ({ goBack: path })),
}));

export default zuStore;
