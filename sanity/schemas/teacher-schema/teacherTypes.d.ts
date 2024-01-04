import { LevelEnglish } from '../levelEnglish-schema/levelEnglishTypes'
import { TeacherTags } from './teacherTags-schema/teacherTagsTypes'

export type Teacher = {
  _id: string
  _createdAt: Date
  metaTitle: string
  metaDescription: string
  firstname: string
  lastname: string
  patronymic: string
  slug: string
  video: {
    url: string
  }
  image: Images
  imageSmall: Images
  price: number
  certificate: string[]
  about: string
  abroad: string
  startEducation: string
  audio: {
    url: string
  }
  level: LevelEnglish[]
  interests: string[]
  teaches: TeacherTags[]
  videoForCenter?: {
    url: string
  }
  imagePreviewForVideoForCenter?: Images
  imageAbout?: Images
  imagesForAboutPages?: Images[]
}
