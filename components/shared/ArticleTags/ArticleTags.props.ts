import { BlogTags } from '@/sanity/schemas/article-schema/articleTags-schema/blogTagsTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ArticleTagsProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  tags: BlogTags[]
}
