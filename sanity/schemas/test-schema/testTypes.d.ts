import { PortableTextBlock } from 'sanity'
import { TestTags } from './testTags-schema/teacherTagsTypes'

export type singleAnswer = {
  _id: string
  _createdAt: Date
  number: string
  answer: string
}

export type singleQuestion = {
  _id: string
  _createdAt: Date
  type: TestTags
  description: string
  task: string
  rightAnswer: string[]
  explanation: string
  link: string
  answers: singleAnswer[]
}

export type Test = {
  _id: string
  _createdAt: Date
  metaTitle: string
  metaDescription: string
  name: string
  slug: sting
  image: string
  description: string
  questions: singleQuestion[]
}

export default test
