import { create } from 'zustand'

export type ApplicationState = {
  isVisible: boolean
  toggleApplicationForm: (page: string) => void
  page: string
}

export const useApplicationStore = create<ApplicationState>(set => ({
  isVisible: false,
  toggleApplicationForm: page => set(state => ({ isVisible: !state.isVisible, page })),
  page: '',
}))
