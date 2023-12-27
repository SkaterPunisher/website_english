import { Locale } from '@/i18n-config'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type MainLayoutProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: React.ReactNode
  lang: Locale
}
