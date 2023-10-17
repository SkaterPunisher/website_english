export type Article = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: sting;
  date: Date;
  timeForRead: number;
  image: string;
  author: string;
  original: string;
  tags: string[];
  content: PortableTextBlock[];
};

export default test;
