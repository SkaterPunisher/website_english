import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Locale } from '@/i18n-config'
import { FAQ } from '@/sanity/schemas/faq-schema/faqTypes'

export type FAQProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  faq: FAQ
}
