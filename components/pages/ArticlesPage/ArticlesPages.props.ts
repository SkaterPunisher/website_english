import { BlogTags } from '@/sanity/schemas/article-schema/articleTags-schema/blogTagsTypes'
import { Article } from '@/sanity/schemas/article-schema/singleArticleTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ArticlesPagesProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  tags: BlogTags[]
  articles: Article[]
}
