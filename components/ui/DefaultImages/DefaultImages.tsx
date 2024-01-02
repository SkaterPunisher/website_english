import Image from 'next/image'
import React from 'react'
import { ImageDefaultProps } from './DefaultImages.props'
import Default from '@/images/default-Images.jpg'

const DefaultImages = ({
  src,
  width,
  height,
  alt,
  fill,
  sizes,
  quality,
  priority,
  placeholder,
  loading,
  draggable,
  className,
  ...props
}: ImageDefaultProps) => {
  return (
    <Image
      className={className}
      src={src && src !== '' ? src : Default}
      alt={alt ? alt : ''}
      width={width}
      height={height}
      draggable={draggable}
      // priority={priority}
      fill={fill}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      loading={loading}
      {...props}
    />
  )
}

export default DefaultImages
