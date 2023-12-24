import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Locale } from '@/i18n-config'
import { BlogTags } from './blogTagsTypes'

export const getTags = async (lang: Locale): Promise<BlogTags[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "blogTags"] {
      _id,
      _createdAt,
      "tag": tag
    }`,
    { lang },
    { next: { revalidate: 60 * 10 } },
  )
