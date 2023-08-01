import { clientConfig } from '@/config/client-config';
import { ProjectTypes } from '@/sanity/schemas/project-schema/projectTypes';
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
