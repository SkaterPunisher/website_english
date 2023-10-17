import { PortableTextBlock } from 'sanity';

export type singleAnswer = {
  _id: string;
  _createdAt: Date;
  number: string;
  answer: string;
};

export type singleQuestion = {
  _id: string;
  _createdAt: Date;
  type: string;
  description: string;
  task: string;
  rightAnswer: string[];
  explanation: string;
  link: string;
  answers: singleAnswer[];
};

export type Test = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: sting;
  image: string;
  description: string;
  url: string | null;
  questions: singleQuestion[];
};

export default test;
