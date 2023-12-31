export const teacher = {
  name: 'teacher',
  title: 'Учителя',
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
      name: 'firstname',
      title: 'Имя',
      type: 'locale',
    },
    {
      name: 'lastname',
      title: 'Фамилия',
      type: 'locale',
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
      options: { source: 'lastname.ru' },
    },
    {
      name: 'video',
      title: 'Видео',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      fields: [
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
        // Дополнительные поля, такие как описание, alt текст и т.д.
      ],
    },
    {
      name: 'image',
      title: 'Главное изображение (1012px|1550px max 0.3MB)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'imageSmall',
      title: 'Превью (200px|200px max 0.1MB)',
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
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      fields: [
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
        // Дополнительные поля, такие как описание, alt текст и т.д.
      ],
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

    {
      name: 'videoForCenter',
      title: 'Видео про центр (только для Оксаны)',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      fields: [
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
        // Дополнительные поля, такие как описание, alt текст и т.д.
      ],
    },
    {
      name: 'imagePreviewForVideoForCenter',
      title: 'Превью для видео про центр (только для Оксаны) (2592px|1120px max 0.3MB)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'imageAbout',
      title: 'Изображение про центр (только для Оксаны) (1276px|1432px max 0.3MB)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'imagesForAboutPages',
      title: 'Изображение про центр (только для Оксаны) (1276px|1702px max 0.3MB)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
        },
      ],
    },
  ],
}

export default teacher
