const post = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'localeString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    // {
    //   name: 'content',
    //   title: 'Content',
    //   type: 'array',
    //   of: [{ type: 'block' }],
    // },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString',
    },
  ],
};

export default post;
