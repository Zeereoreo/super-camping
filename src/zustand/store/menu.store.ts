import { create } from 'zustand';

interface MenuState {
    selectedMenu: string[];
    setSelectedMenu: (menu: string[]) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
    selectedMenu: [],
    setSelectedMenu: (menu) => set({ selectedMenu: menu }),
})); 