import { BlogTags } from './articleTags-schema/blogTagsTypes'
import { Teacher } from '../teacher-schema/teacherTypes'

export type Images = {
  url: string | null
  alt: string
}

export type Article = {
  _id: string
  _createdAt: Date
  metaTitle: string
  metaDescription: string
  name: string
  description: string
  slug: sting
  date: string
  timeForRead: number
  image: Images
  imageSmall: Images
  author: Teacher
  original: string
  tags: BlogTags[]
  content: PortableTextBlock[]
}
