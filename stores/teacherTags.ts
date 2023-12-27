import { create } from 'zustand'

export type TagsState = {
  tag: string
  setTags: (tag: string) => void
}

export const useTeacherTagsStore = create<TagsState>(set => ({
  tag: '',
  setTags: tag => set({ tag: tag }),
}))
