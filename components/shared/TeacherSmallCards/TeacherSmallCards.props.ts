import { Teacher } from '@/sanity/schemas/teacher-schema/teacherTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TeacherSmallCardsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  teachers: Teacher[]
}
