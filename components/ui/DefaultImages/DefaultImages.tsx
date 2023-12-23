import Image from 'next/image'
import React from 'react'
import { ImageDefaultProps } from './DefaultImages.props'
import Default from '@/images/default-Images.jpg'

const DefaultImages = ({
  src,
  alt,
  draggable,
  priority = true,
  width,
  height,
  className,
  ...props
}: ImageDefaultProps) => {
  return src ? (
    <Image
      className={className}
      src={src}
      alt={alt ? alt : ''}
      width={width}
      height={height}
      draggable={draggable}
      priority={priority}
      {...props}
    />
  ) : (
    <Image
      className={className}
      src={Default}
      alt={alt ? alt : ''}
      width={width}
      height={height}
      draggable={draggable}
      priority={priority}
      {...props}
    />
  )
}

export default DefaultImages
