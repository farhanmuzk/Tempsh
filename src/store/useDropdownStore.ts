import create from 'zustand';

interface DropdownState {
  selectedButton: string | null;
  isDropdownOpen: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  setSelectedButton: (button: string | null) => void;
}

const useDropdownStore = create<DropdownState>((set) => ({
  selectedButton: null,
  isDropdownOpen: false,
  openDropdown: () => set({ isDropdownOpen: true }),
  closeDropdown: () => set({ isDropdownOpen: false }),
  setSelectedButton: (button) => set({ selectedButton: button }),
}));

export default useDropdownStore;
