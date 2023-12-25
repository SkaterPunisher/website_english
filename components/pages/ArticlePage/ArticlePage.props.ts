import { Article } from '@/sanity/schemas/article-schema/singleArticleTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ArticlePageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  article: Article
}
