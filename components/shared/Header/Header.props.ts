import { Locale } from '@/i18n-config'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  lang: Locale
}
