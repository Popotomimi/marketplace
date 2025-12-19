// bottomsheet-store.ts
import { create } from "zustand";

interface BottomSheetState {
  isOpen: boolean;
  content: React.ReactNode | null;
  config?: { snapPoints?: string[]; enablePanDownToClose?: boolean };
  open: (params: {
    content: React.ReactNode;
    config?: BottomSheetState["config"];
  }) => void;
  close: () => void;
}

export const useBottomSheetStore = create<BottomSheetState>((set) => ({
  isOpen: false,
  content: null,
  config: undefined,
  open: ({ content, config }) => set({ isOpen: true, content, config }),
  close: () => set({ isOpen: false, content: null, config: undefined }),
}));
