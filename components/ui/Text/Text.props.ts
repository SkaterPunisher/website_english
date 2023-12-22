import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: 'xs' | 's' | 'l' | 'xl' | 'button'
  underline?: boolean
}
