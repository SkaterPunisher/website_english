import { clientConfig } from '@/config/client-config';
import { createClient, groq } from 'next-sanity';
import { Test } from './testTypes';

export const getTests = async (): Promise<Test[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "test"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
      url,
      questions
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
