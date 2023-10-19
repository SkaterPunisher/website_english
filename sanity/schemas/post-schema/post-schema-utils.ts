import { clientConfig } from '@/config/client-config'
import { ProjectTypes } from '@/sanity/schemas/project-schema/projectTypes'
import { createClient, groq } from 'next-sanity'
import { PostTypes } from './PostTypes'
import { Locale } from '@/i18n-config'

export const getPosts = async (lang: Locale): Promise<PostTypes[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        "name": name[$lang],
        "slug": slug.current,
        "image": image.asset->url,
        url,
        "description": description[$lang],
    }`,
    { lang },
  )

export const getPost = async (slug: string, lang: Locale): Promise<PostTypes> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      "name": name[$lang],
      "slug": slug.current,
      "image": image.asset->url,
      url,
      "description": description[$lang],
  }`,
    { slug, lang },
  )
