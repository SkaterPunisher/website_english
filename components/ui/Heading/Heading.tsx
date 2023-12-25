import styles from './Heading.module.scss'
import cn from 'classnames'
import { HeadingProps } from './Heading.props'

const Heading = ({ tag = 'h2', className, children, ...props }: HeadingProps) => {
  const Component = tag === 'h1-s' ? 'h1' : tag

  return (
    <Component className={cn(styles.heading, styles[tag], className)} {...props}>
      {children}
    </Component>
  )
}

export default Heading
