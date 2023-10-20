import test from './singleArticleTypes'

export const singleArticle = {
  name: 'singleArticle',
  title: 'Статьи',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Заголовок',
      type: 'locale',
    },
    {
      name: 'description',
      title: 'Описание (кратко для поисковиков)',
      type: 'locale',
    },
    {
      name: 'slug',
      title: 'Уникальный ключ',
      type: 'slug',
      options: { source: 'name.ru' },
    },
    {
      name: 'date',
      title: 'Дата публикации',
      type: 'date',
    },
    {
      name: 'timeForRead',
      title: 'Время на прочтение',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Главное изображение (1290px|550px max 0.3MB)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'imageSmall',
      title: 'Превью (836px|px 600max 0.1MB)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'author',
      title: 'Автор статьи',
      type: 'reference',
      to: [{ type: 'teacher' }],
    },

    {
      name: 'original',
      title: 'Ссылка на оригинал',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Теги статьи',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogTags' }] }],
    },
    {
      name: 'content',
      title: 'Статья (1536px|646px max 0.2MB)',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}

export default singleArticle
