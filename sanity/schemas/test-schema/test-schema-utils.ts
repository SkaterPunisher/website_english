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
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      description,
      url,
      questions
    }`
  );
