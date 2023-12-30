import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  tag?: 'h1' | 'h1-s' | 'h2' | 'h2-s' | 'h3' | 'h4' | 'h5' | 'h6'
}
