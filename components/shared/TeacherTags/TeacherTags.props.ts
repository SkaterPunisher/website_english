import { BlogTags } from '@/sanity/schemas/article-schema/articleTags-schema/blogTagsTypes'
import { TeacherTags } from '@/sanity/schemas/teacher-schema/teacherTags-schema/teacherTagsTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TeacherTagsProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  tags: TeacherTags[]
}
