import { create } from "zustand";
import pages from "../constants/pages";

type PagesState = {
  pages: { id: number; name: string }[];
  selectedPages: number[];
  togglePage: (id: number) => void;
  toggleAllPages: () => void;
};

const usePagesStore = create<PagesState>((set) => ({
  pages: pages,
  selectedPages: [],
  togglePage: (id) => {
    set((state) => ({
      selectedPages: state.selectedPages.includes(id)
        ? state.selectedPages.filter((pageId) => pageId !== id)
        : [...state.selectedPages, id],
    }));
  },
  toggleAllPages: () => {
    set((state) => ({
      selectedPages:
        state.selectedPages.length === state.pages.length
          ? []
          : state.pages.map((page) => page.id),
    }));
  },
}));

export default usePagesStore;
