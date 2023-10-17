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
      "image": image.asset->url,
      date,
      timeForRead,
      author,
      original,
      tags,
      content
    }`
  );

// export const getProject = async (slug: string): Promise<ProjectTypes> =>
//   createClient(clientConfig).fetch(
//     groq`*[_type == "project" && slug.current == $slug][0] {
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content,
//       category
//   }`,
//     { slug }
//   );
