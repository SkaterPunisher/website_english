import styles from './HowSaveMoney.module.scss'
import cn from 'classnames'
import { HowSaveMoneyProps } from './HowSaveMoney.props'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
import Icon10 from '@/icons/10%.svg'
import Icon13 from '@/icons/13%.svg'
import Icon1000 from '@/icons/1000rub.svg'

const HowSaveMoney = ({ className, ...props }: HowSaveMoneyProps) => {
  return (
    <section className={cn(styles.wrapper, 'layout', className)} {...props}>
      <Heading tag="h3" className={styles.heading}>
        Как можно сэкономить?
      </Heading>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.content}>
            <Text size="l" className={styles.title}>
              Семейные скидки
            </Text>
            <Text size="s" className={styles.description}>
              Скидка 10% каждому члену семьи если занимается от 2х человек
            </Text>
          </div>
          <div className={styles.iconSmall}>
            <Icon10 />
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.content}>
            <Text size="l" className={styles.title}>
              Акция «Приведи друга»
            </Text>
            <Text size="s" className={styles.description}>
              Пригласите вашего друга в нашу студию английского и получите каждый по 1&nbsp;000₽
            </Text>
          </div>
          <div className={styles.iconBig}>
            <Icon1000 />
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.content}>
            <Text size="l" className={styles.title}>
              Налоговый вычет
            </Text>
            <Text size="s" className={styles.description}>
              Обучаясь у нас в студии вы можете вернуть 13% налога
            </Text>
          </div>
          <div className={styles.iconSmall}>
            <Icon13 />
          </div>
        </li>
      </ul>
    </section>
  )
}

export default HowSaveMoney
