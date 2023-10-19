import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Article } from './singleArticleTypes'
import { Locale } from '@/i18n-config'

export const getArticles = async (): Promise<Article[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "singleArticle"]{
      _id,
      _createdAt,
      name,
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
      "author": author->{firstname, lastname},
      original,
      "tags": tags[]->{tag},
      content,
    }`,
  )

export const getSingleArticle = async (slug: string): Promise<Article> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "singleArticle" && slug.current == $slug][0] {
      _id,
      _createdAt,
      name,
      description,
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
      "author": author->{firstname, lastname},
      original,
      "tags": tags[]->{tag},
      content,
    }`,
    { slug },
  )
