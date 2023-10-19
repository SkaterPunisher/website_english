import { LevelEnglish } from '../levelEnglish-schema/levelEnglishTypes'
import { TeacherTags } from './teacherTags-schema/teacherTagsTypes'

export type Teacher = {
  _id: string
  _createdAt: Date
  firstname: string
  lastname: string
  patronymic: string
  slug: string
  video: string
  image: Images
  imageSmall: Images
  price: number
  certificate: string[]
  about: string
  abroad: string
  startEducation: string
  audio: string
  level: LevelEnglish[]
  interests: string[]
  teaches: TeacherTags[]
}
