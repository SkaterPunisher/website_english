import { BlogTags } from './articleTags-schema/blogTagsTypes'
import { Teacher } from '../teacher-schema/teacherTypes'

export type Price = {
  _id: string
  _createdAt: Date
  title: string
  single: number
  pair: number
  mini: number
  group: number
}
