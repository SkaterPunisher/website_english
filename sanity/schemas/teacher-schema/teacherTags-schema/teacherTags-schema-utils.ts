import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Locale } from '@/i18n-config'
import { TeacherTags } from './teacherTagsTypes'

export const getTeacherTags = async (lang: Locale): Promise<TeacherTags[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "teacherTags"] {
      _id,
      _createdAt,
      "name": name
    }`,
    { lang },
    { next: { revalidate: 60 * 10 } },
  )
