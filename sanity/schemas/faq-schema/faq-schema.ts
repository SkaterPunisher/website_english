export const singleFAQ = {
  name: 'singleFAQ',
  title: 'singleFAQ',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Вопрос',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Ответ',
      type: 'string',
    },
  ],
}

export const faq = {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'namePage',
      title: 'Для какой страницы',
      type: 'reference',
      to: [{ type: 'faqTags' }],
    },
    {
      name: 'faqs',
      title: 'FAQ',
      type: 'array',
      of: [{ type: 'singleFAQ' }],
    },
  ],
}

export default faq
