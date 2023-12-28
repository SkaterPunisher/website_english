import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ReviewCardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  src: string
  srcPoster?: string
}
