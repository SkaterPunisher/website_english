import styles from './BasketButton.module.scss'
import BagIcon from '@/icons/shopping-bag.svg'
import { BasketButtonProps } from './BasketButton.props'
import cn from 'classnames'
import useCartStore from '@/stores/cart.store'

const BasketButton = ({ className, ...props }: BasketButtonProps) => {
  const { items } = useCartStore()

  return (
    <div className={cn(styles.wrapper, 'buttonIconWrapper', className)} {...props}>
      <BagIcon />
      {items.length > 0 && <div className={styles.count}>{items.length}</div>}
    </div>
  )
}

export default BasketButton
