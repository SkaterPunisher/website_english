import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Locale } from '@/i18n-config'
import { FAQ } from '@/sanity/schemas/faq-schema/faqTypes'

export type FAQ2Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  lang: Locale
  pageName: string
}
