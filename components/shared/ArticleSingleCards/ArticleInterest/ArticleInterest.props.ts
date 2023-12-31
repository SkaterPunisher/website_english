import { Locale } from '@/i18n-config'
import { Article } from '@/sanity/schemas/article-schema/singleArticleTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ArticleInterestProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  articles: Article[]
}
