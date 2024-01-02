import { Courses } from '@/sanity/schemas/courses-schema/coursesTypes'
import { create } from 'zustand'

export type CostCoursesState = {
  course: Courses | undefined
  setCourse: (tag: Courses) => void
}

export const useCostCoursesStore = create<CostCoursesState>(set => ({
  course: undefined,
  setCourse: course => set({ course: course }),
}))
