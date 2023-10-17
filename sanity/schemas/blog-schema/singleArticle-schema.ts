export const singleArticle = {
  name: 'singleArticle',
  title: 'Статьи',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Уникальный ключ',
      type: 'slug',
      options: { source: 'name' },
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
      title: 'Главное изображение (превью)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'author',
      title: 'Автор статьи',
      type: 'string',
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
      of: [{ type: 'string' }],
    },
    {
      name: 'content',
      title: 'Статья',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default singleArticle;