import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  size?: 'xxs' | 'xs' | 's' | 'sl' | 'l' | 'll' | 'xl' | 'button'
  underline?: boolean
}
