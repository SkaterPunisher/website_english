export const teacher = {
  name: 'teacher',
  title: 'Учителя',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'Имя',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Фамилия',
      type: 'string',
    },
    {
      name: 'patronymic',
      title: 'Отчество',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Уникальный ключ',
      type: 'slug',
      options: { source: 'lastname' },
    },
    {
      name: 'video',
      title: 'Видео',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Главное изображение (превью)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'price',
      title: 'Стоимость за урок',
      type: 'number',
    },
    {
      name: 'certificate',
      title: 'Сертификаты',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'about',
      title: 'О себе',
      type: 'string',
    },
    {
      name: 'abroad',
      title: 'Опыт за границей',
      type: 'string',
    },
    {
      name: 'startEducation',
      title: 'Начало стажа',
      type: 'date',
    },
    {
      name: 'audio',
      title: 'Аудио',
      type: 'string',
    },
    {
      name: 'level',
      title: 'Уровни',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'levelEnglish' }] }],
    },
    {
      name: 'interests',
      title: 'Интересы',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'teaches',
      title: 'Преподает',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teacherTags' }] }],
    },
  ],
}

export default teacher
