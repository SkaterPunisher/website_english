import { BlogTags } from '../blogTags-schema/blogTagsTypes'
import { Teacher } from '../teacher-schema/teacherTypes'

export type Images = {
  url: string
  alt: string
}

export type Article = {
  _id: string
  _createdAt: Date
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
