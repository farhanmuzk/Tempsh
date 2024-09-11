import create from 'zustand';

interface NavbarState {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
