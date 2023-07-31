import { clientConfig } from '@/config/client-config';
import { Locale } from '@/i18n-config';
import { PageTypes } from '@/types/PageTypes';
import { ProjectTypes } from '@/types/ProjectTypes';
import { createClient, groq } from 'next-sanity';

export const getProjects = async (): Promise<ProjectTypes[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        category
    }`
  );

export const getProject = async (slug: string): Promise<ProjectTypes> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
      category
  }`,
    { slug }
  );

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

export const getArticle = async (lang: Locale): Promise<{ title: string }> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "article"][0] {
      "title": title[$lang]
  }`,
    { lang }
  );
