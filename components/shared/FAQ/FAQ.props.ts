import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Locale } from '@/i18n-config'

export type FAQProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  lang: Locale
  pageName: string
}
