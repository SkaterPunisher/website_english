import { Teacher } from '@/sanity/schemas/teacher-schema/teacherTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeaderPageAboutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  teacher: Teacher
}
