import { create, StoreApi, UseBoundStore } from 'zustand';
import { IEventProps } from '../components/atoms/Content';

export interface IStore {
  goBack: string;
  events: IEventProps[];
  setGoBack: (P: string) => void;
  setEvents: (P: IEventProps[]) => void;
}

const zuStore: UseBoundStore<StoreApi<IStore>> = create((set) => ({
  goBack: '/',
  events: [],
  setGoBack: (path: string) => set(() => ({ goBack: path })),
  setEvents: (events: IEventProps[]) => set(() => ({ events })),
}));

export default zuStore;
