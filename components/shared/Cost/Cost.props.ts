import { Courses } from '@/sanity/schemas/courses-schema/coursesTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type CostProps = {
  courses?: Courses[]
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
