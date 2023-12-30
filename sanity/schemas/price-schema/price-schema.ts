export const price = {
  name: 'price',
  title: 'Стоимость',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'single',
      title: 'Индивидуально',
      type: 'number',
    },
    {
      name: 'pair',
      title: 'Пара',
      type: 'number',
    },
    {
      name: 'mini',
      title: 'Мини-группа',
      type: 'number',
    },
    {
      name: 'group',
      title: 'Группа',
      type: 'number',
    },
  ],
}

export default price
