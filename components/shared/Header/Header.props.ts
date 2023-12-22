import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  lang: 'en' | 'ru'
}
