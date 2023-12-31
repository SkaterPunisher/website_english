import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ReviewVideoCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  srcVideo: string
  srcPoster?: string
}
