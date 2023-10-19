import { clientConfig } from '@/config/client-config';
import { createClient, groq } from 'next-sanity';
import { Article } from './singleArticleTypes';

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
      date,
      timeForRead,
      "author": author->{firstname, lastname},
      original,
      tags,
      content,
    }`
  );
