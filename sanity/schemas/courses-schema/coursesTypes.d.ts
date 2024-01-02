import { BlogTags } from './articleTags-schema/blogTagsTypes'
import { Teacher } from '../teacher-schema/teacherTypes'
import { Price } from '../price-schema/priceTypes'

export type Courses = {
  _id: string
  _createdAt: Date
  title: string
  description: string
  price: Price
  slug: string
}
