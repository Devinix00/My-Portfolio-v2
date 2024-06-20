import { create } from "zustand";

interface UseModalStore {
  isModalOpened: boolean;
  setIsModalOpened: (modalState: boolean) => void;
}

export const useModalStore = create<UseModalStore>((set) => ({
  isModalOpened: false,
  setIsModalOpened: (modalState: boolean) =>
    set(() => ({ isModalOpened: modalState })),
}));
