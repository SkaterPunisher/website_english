import { clientConfig } from '@/config/client-config';
import { PageTypes } from '@/sanity/schemas/page-schema/PageTypes';
import { createClient, groq } from 'next-sanity';

export const getPages = async (): Promise<PageTypes[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
    }`
  );

export const getPage = async (slug: string): Promise<PageTypes> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
  }`,
    { slug }
  );
