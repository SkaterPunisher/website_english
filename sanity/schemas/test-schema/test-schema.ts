export const singleAnswer = {
  name: 'answer',
  title: 'Answer',
  type: 'object',
  fields: [
    {
      name: 'number',
      title: 'Номер',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Ответ',
      type: 'string',
    },
  ],
}

export const singleQuestion = {
  name: 'question',
  title: 'Question',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Тип',
      type: 'reference',
      to: [{ type: 'testTags' }],
    },
    {
      name: 'description',
      title: 'Описание задания (что нужно сделать)',
      type: 'string',
    },
    {
      name: 'task',
      title: 'Сам вопрос',
      type: 'string',
    },
    {
      name: 'rightAnswer',
      title: 'Правильный ответ(ы)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'explanation',
      title: 'Пояснение правильного ответа',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Ссылка на аудио/видео/изображение в вопросе',
      type: 'string',
    },
    {
      name: 'answers',
      title: 'Ответы',
      type: 'array',
      of: [{ type: 'answer' }],
    },
  ],
}

const test = {
  name: 'test',
  title: 'Тесты',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'Мета заголовок',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Мета описание',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Название теста',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Уникальный ключ',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Главное изображение (836px|px 600max 0.1MB)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'questions',
      title: 'Вопросы',
      type: 'array',
      of: [{ type: 'question' }],
    },
  ],
}

export default test
