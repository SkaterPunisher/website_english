import { Locale } from '@/i18n-config'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ArticleSingleCardsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  lang: Locale
  tags: string[]
}
