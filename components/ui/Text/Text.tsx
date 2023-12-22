'use client'
import React from 'react'
import { TextProps } from './Text.props'
import cn from 'classnames'
import styles from './Text.module.scss'

const Text = ({ children, className, size = 's', underline, ...props }: TextProps) => {
  return (
    <p
      {...props}
      className={cn(styles.text, styles[size], underline && styles.underline, className)}
    >
      {children}
    </p>
  )
}

export default Text
