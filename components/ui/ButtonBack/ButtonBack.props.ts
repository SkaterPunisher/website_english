import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ButtonBackProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode
  href: string
}
