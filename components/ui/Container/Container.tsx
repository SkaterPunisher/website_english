import React from 'react'
import { ContainerProps } from './Container.props'
import styles from './Container.module.scss'
import cn from 'classnames'

const Container = ({ size = 's', children, className, ...props }: ContainerProps) => {
  return (
    <div className={cn(styles.container, styles[size], className)} {...props}>
      {children}
    </div>
  )
}

export default Container
