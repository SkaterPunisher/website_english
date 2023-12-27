import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Teacher } from './teacherTypes'
import { Locale } from '@/i18n-config'

export const getTeachers = async (lang: Locale): Promise<Teacher[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "teacher"]{
      _id,
      _createdAt,
      metaDescription,
      metaTitle,
      "firstname": firstname[$lang],
      "lastname": lastname[$lang],
      patronymic,
      "slug": slug.current,
      "video": {
        "url": video.asset->url,
      },
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
      "audio": {
        "url": audio.asset->url,
      },
      "level": level[]->{level, _id},
      interests,
      "teaches": teaches[]->{name, _id},
    }`,
    { lang },
    { next: { revalidate: 60 * 10 } },
  )

export const getTeacher = async (slug: string, lang: Locale): Promise<Teacher> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "teacher" && slug.current == $slug][0] {
      _id,
      _createdAt,
      metaDescription,
      metaTitle,
      "firstname": firstname[$lang],
      "lastname": lastname[$lang],
      patronymic,
      "slug": slug.current,
      "video": {
        "url": video.asset->url,
      },
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
      "audio": {
        "url": audio.asset->url,
      },
      "level": level[]->{level, _id},
      interests,
      "teaches": teaches[]->{name, _id},
    }`,
    { slug, lang },
  )
