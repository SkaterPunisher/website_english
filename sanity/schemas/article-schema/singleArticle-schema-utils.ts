import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Article } from './singleArticleTypes'
import { Locale } from '@/i18n-config'

export const getArticles = async (lang: Locale): Promise<Article[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "singleArticle"]{
      _id,
      _createdAt,
      "name": name[$lang],
      "description": description[$lang],
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      "imageSmall": {
        "url": imageSmall.asset->url,
        "alt": imageSmall.alt
      },
      date,
      timeForRead,
      "author": author->{"firstname": firstname[$lang], "lastname": lastname[$lang]},
      original,
      "tags": tags[]->{tag},
      content,
    }`,
    { lang },
    { next: { revalidate: 60 * 10 } },
  )

export const getArticle = async (slug: string, lang: Locale): Promise<Article> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "singleArticle" && slug.current == $slug][0] {
      _id,
      _createdAt,
      "name": name[$lang],
      "description": description[$lang],
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      "imageSmall": {
        "url": imageSmall.asset->url,
        "alt": imageSmall.alt
      },
      date,
      timeForRead,
      "author": author->{"firstname": firstname[$lang], "lastname": lastname[$lang]},
      original,
      "tags": tags[]->{tag},
      content,
    }`,
    { slug, lang },
  )
