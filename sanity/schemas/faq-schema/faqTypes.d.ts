export type singleFAQ = {
  _id: string
  _createdAt: Date
  question: string
  answer: string
}

export type FAQ = {
  _id: string
  _createdAt: Date
  title: string
  namePage: TestTags
  faqs: singleFAQ[]
}

export type FAQs = FAQ[]
