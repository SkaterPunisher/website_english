import { TeacherTags } from '../teacherTags-schema/teacherTagsTypes';

export type Teacher = {
  _id: string;
  _createdAt: Date;
  firstname: string;
  lastname: string;
  patronymic: string;
  slug: string;
  video: string;
  image: string;
  price: number;
  certificate: string[];
  about: string;
  abroad: string;
  startEducation: Date;
  audio: string;
  level: string[];
  interests: string[];
  teaches: TeacherTags[];
};
