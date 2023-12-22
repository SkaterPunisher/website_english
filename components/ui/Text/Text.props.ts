import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: 's' | 'l' | 'xl' | 'button'
  underline?: boolean
}
