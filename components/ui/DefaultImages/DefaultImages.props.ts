import { ImageProps, StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ImageDefaultProps = Omit<ImageProps, 'src'> & {
  src: string
  width: number
  height: number
  alt: string
  fill?: boolean
  sizes?: string
  quality?: number
  priority?: boolean
  placeholder?: 'blur' | 'empty' | `data:image/${string}`
  loading?: 'eager' | 'lazy'
  className?: string
  style?: DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>
}
