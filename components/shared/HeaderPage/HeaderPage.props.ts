import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeaderPageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  color?: 'blue' | 'red' | 'purple' | 'yellow'
  title: string
  description: string
  btnText: string
}
