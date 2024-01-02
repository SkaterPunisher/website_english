import styles from './InBasketRow.module.scss'
import Text from '@/components/ui/Text/Text'
import Btn from '@/components/ui/Btn/Btn'
import VectorIcon_1 from '@/icons/vector-yellow-form-1.svg'
import VectorIcon_2 from '@/icons/vector-yellow-form-2.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'

const InBasketRow = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div>
          <Text size="l" className={styles.title}>
            Добавлено в корзину
          </Text>
          <Text size="ll" className={styles.subtitle}>
            вы можете добавить другие курсы в корзину
          </Text>
        </div>

        <CustomLink href="/cart" className={styles.button}>
          <Btn color="black">Открыть корзину</Btn>
        </CustomLink>
      </div>
    </section>
  )
}

export default InBasketRow
