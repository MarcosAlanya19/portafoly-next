import { create } from 'zustand';

interface ThemeStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

/*----------------------------------------------------------------------------------------*/

export type Refs = {
  data1: HTMLDivElement | null;
  data2: HTMLDivElement | null;
  data3: HTMLDivElement | null;
  data4: HTMLDivElement | null;
  data5: HTMLDivElement | null;
};

type State = {
  refs: Refs;
  state: Record<string, any>;
  scrollToElement: (refName: keyof Refs) => void;
};

export const useRefStore = create<State>((set, get) => ({
  refs: {
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
  },
  state: {},
  scrollToElement: (refName) => {
    const ref = get().refs[refName];
    if (ref) {
      const scrollPosition = ref.offsetTop - ref.clientHeight * 0.1;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  },
}));
