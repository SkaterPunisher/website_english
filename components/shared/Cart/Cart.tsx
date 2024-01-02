'use client'

import styles from './Cart.module.scss'
import cn from 'classnames'
import { CartProps } from './Cart.props'
import FormCart from '@/components/shared/FormCart/FormCart'
import Text from '@/components/ui/Text/Text'
import useCartStore from '@/stores/cart.store'
import Button from '@/components/ui/Button/Button'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import CloseIcon from '@/icons/close.svg'

const Cart = ({ className, ...props }: CartProps) => {
  const { items, removeItem } = useCartStore()

  return (
    <section className={cn(styles.section, 'layout', className)} {...props}>
      <div className={styles.wrapper}>
        <FormCart />

        <div className={styles.cartItems}>
          <Text size="ll" className={styles.titleCartItems}>
            Выбранные курсы
          </Text>
          <ul className={styles.list}>
            {items.length > 0 ? (
              items.map(item => (
                <li key={item.course._id} className={styles.item}>
                  <div className={styles.content}>
                    <Text size="sl">{item.course.title}</Text>
                    <Text size="xxs" className={styles.gray}>
                      на {item.type.period}
                    </Text>
                    <Text size="xxs" className={styles.gray}>
                      от {(item.course.price[item.type.price] * 8).toLocaleString('ru-RU')} мес
                    </Text>
                  </div>

                  <CustomLink href={`/courses/${item.course.slug}`}>
                    <Button placeholder={'Подробнее'} color="purple" className={styles.btn}>
                      <ArrowRightIcon style={{ width: 24 }} />
                    </Button>
                  </CustomLink>

                  <div className={styles.icon} onClick={() => removeItem(item.course._id)}>
                    <CloseIcon />
                  </div>
                </li>
              ))
            ) : (
              <li>
                <Text size="s">Корзина пустая</Text>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cart
