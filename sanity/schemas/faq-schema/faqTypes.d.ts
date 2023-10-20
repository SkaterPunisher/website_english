export type singleFAQ = {
  _id: string
  _createdAt: Date
  question: string
  answer: string
}

export type FAQ = {
  _id: string
  _createdAt: Date
  namePage: TestTags
  faqs: singleFAQ[]
}
