import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ArticleSingleCardsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  lang: 'ru' | 'en'
  tags: string[]
}
