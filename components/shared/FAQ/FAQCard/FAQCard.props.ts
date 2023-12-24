import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Locale } from '@/i18n-config'
import { singleFAQ } from '@/sanity/schemas/faq-schema/faqTypes'

export type FAQCardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  faq: singleFAQ
}
