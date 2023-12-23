import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
