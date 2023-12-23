import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  tag?: 'h2'
}
