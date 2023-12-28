import { LevelEnglish } from '../levelEnglish-schema/levelEnglishTypes'
import { TeacherTags } from './teacherTags-schema/teacherTagsTypes'

export type Reviews = [
  {
    _id: string
    _createdAt: Date
    videos: Array<{
      _key: string // Sanity добавляет уникальный ключ для элементов массива
      asset: {
        // В Sanity файлы представлены ссылкой на объект asset
        _ref: string // Ссылка на видеофайл в Sanity
      }
      // Дополнительные поля, такие как описание, alt текст и т.д., если они есть
      assetUrl?: string
      preview?: string
    }>
  },
]
