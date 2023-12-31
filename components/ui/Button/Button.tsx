import { ButtonProps } from './Button.props'
import cn from 'classnames'
import styles from './Button.module.scss'
import Text from '@/components/ui/Text/Text'

const Button = ({
  size = 'button',
  placeholder,
  children,
  color = 'red',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {placeholder && (
        <Text className={styles.placeholder} size={size}>
          {placeholder}
        </Text>
      )}
      {children && <div className={cn('buttonIconWrapper', styles[color])}>{children}</div>}
    </button>
  )
}

export default Button
