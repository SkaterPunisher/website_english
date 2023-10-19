import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Teacher } from './teacherTypes'
import { Locale } from '@/i18n-config'

export const getTeachers = async (lang: Locale): Promise<Teacher[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "teacher"]{
      _id,
      _createdAt,
      "firstname": firstname[$lang],
      "lastname": lastname[$lang],
      patronymic,
      "slug": slug.current,
      video,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      "imageSmall": {
        "url": imageSmall.asset->url,
        "alt": imageSmall.alt
      },
      price,
      certificate,
      about,
      abroad,
      startEducation,
      audio,
      level,
      interests,
      "teaches": teaches[]->{name, _id},
    }`,
    { lang },
  )

export const getTeacher = async (slug: string, lang: Locale): Promise<Teacher> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "teacher" && slug.current == $slug][0] {
      _id,
      _createdAt,
      "firstname": firstname[$lang],
      "lastname": lastname[$lang],
      patronymic,
      "slug": slug.current,
      video,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      "imageSmall": {
        "url": imageSmall.asset->url,
        "alt": imageSmall.alt
      },
      price,
      certificate,
      about,
      abroad,
      startEducation,
      audio,
      "level": level[]->{level, _id},
      interests,
      "teaches": teaches[]->{name, _id},
    }`,
    { slug, lang },
  )
