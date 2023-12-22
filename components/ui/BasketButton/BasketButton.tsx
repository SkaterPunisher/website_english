import styles from './BasketButton.module.scss'
import BagIcon from '@/icons/shopping-bag.svg'
import { BasketButtonProps } from './BasketButton.props'
import cn from 'classnames'

const BasketButton = ({ count = 0, className, ...props }: BasketButtonProps) => {
  return (
    <div className={cn(styles.wrapper, 'buttonIconWrapper', className)} {...props}>
      <BagIcon />
      {count > 0 && <div className={styles.count}>{count}</div>}
    </div>
  )
}

export default BasketButton
