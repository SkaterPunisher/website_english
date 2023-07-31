export const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'string',
    },
    {
      title: 'Russian',
      name: 'ru',
      type: 'string',
    },
  ],
};

const article = {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
  ],
};

export default article;
