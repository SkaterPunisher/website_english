import { BtnProps } from './Btn.props'
import cn from 'classnames'
import styles from './Btn.module.scss'
import Text from '@/components/ui/Text/Text'

const Btn = ({
  disabled,
  children,
  color = 'black',
  size = 's',
  className,
  ...props
}: BtnProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, styles[color], styles[size], className)}
      {...props}
    >
      <Text size="s">{children}</Text>
    </button>
  )
}

export default Btn
