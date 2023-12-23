import { ImageProps, StaticImageData } from 'next/image'

export type ImageDefaultProps = Omit<ImageProps, 'src'> & {
  src?: string | StaticImageData
}
