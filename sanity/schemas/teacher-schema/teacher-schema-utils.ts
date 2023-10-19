import { clientConfig } from '@/config/client-config';
import { createClient, groq } from 'next-sanity';
import { Teacher } from './teacherTypes';

export const getTeachers = async (): Promise<Teacher[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "teacher"]{
      _id,
      _createdAt,
      firstname,
      lastname,
      patronymic,
      slug,
      video,
      image,
      price,
      certificate,
      about,
      abroad,
      startEducation,
      audio,
      level,
      interests,
      teaches
    }`
  );
