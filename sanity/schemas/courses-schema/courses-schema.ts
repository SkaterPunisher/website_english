export const courses = {
  name: 'courses',
  title: 'Курс',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Стоимость',
      type: 'reference',
      to: [{ type: 'price' }],
    },
  ],
}

export default courses
