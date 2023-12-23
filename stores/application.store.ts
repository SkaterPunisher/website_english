import { create } from 'zustand'

export type ApplicationState = {
  isVisible: boolean
  toggleApplicationForm: () => void
}

export const useApplicationStore = create<ApplicationState>(set => ({
  isVisible: false,
  toggleApplicationForm: () => set(state => ({ isVisible: !state.isVisible })),
}))
