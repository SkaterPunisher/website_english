import { create } from 'zustand'

export type TagsState = {
  tags: string[]
  addTags: (tag: string) => void
}

export const useTagsStore = create<TagsState>(set => ({
  tags: [],
  addTags: tag =>
    set(state => {
      const tagIndex = state.tags.indexOf(tag)
      let newTags = [...state.tags]

      if (tagIndex === -1) {
        // Тега нет в массиве, добавляем его
        newTags = [...state.tags, tag]
      } else {
        // Тег уже есть в массиве, нужно его удалить
        newTags.splice(tagIndex, 1)
      }

      return { tags: newTags }
    }),
}))
