export const reviews = {
  name: 'reviews',
  title: 'Отзывы',
  type: 'document',
  fields: [
    {
      name: 'videos', // Используем множественное число, так как это будет массив
      title: 'Видео',
      type: 'array', // Указываем, что это массив
      of: [
        {
          type: 'file', // Каждый элемент массива будет файлом
          options: {
            accept: 'video/*', // Принимаем только видео файлы
          },
          fields: [
            {
              name: 'preview',
              title: 'Превью',
              type: 'image',
              options: { hotspot: true },
              fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
            },
          ],
        },
      ],
    },
  ],
}

export default reviews
