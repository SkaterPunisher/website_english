import { Courses } from '@/sanity/schemas/courses-schema/coursesTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type CostCourseSelectProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  courses?: Courses[]
  forCostPage?: boolean
  single?: boolean
}
