import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Store = {
  language: string
  isLanguageChanged: boolean
  setLanguage: (language: string) => void
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      language: 'en',
      isLanguageChanged: false,
      setLanguage: (language) => set((state) => ({
        language,
        isLanguageChanged: state.isLanguageChanged || true
      })),
    }),
    {
      name: 'language-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)