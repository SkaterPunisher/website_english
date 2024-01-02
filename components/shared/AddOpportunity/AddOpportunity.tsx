import styles from './AddOpportunity.module.scss'
import cn from 'classnames'
import { AddOpportunityProps } from './AddOpportunity.props'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
import Vector1 from '@/icons/vector-purple-cost.svg'
import Vector2 from '@/icons/vector-yellow-form-2.svg'

const AddOpportunity = ({ className, ...props }: AddOpportunityProps) => {
  return (
    <section className={cn(styles.wrapper, 'layout', className)} {...props}>
      <Heading tag="h3" className={styles.heading}>
        Дополнительные возможности
      </Heading>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Text size="l" className={styles.title}>
            Вернем деньги за оставшиеся уроки
          </Text>
          <Text size="s" className={styles.description}>
            Без вопросов вернем оставшуюся сумму, если решите приостановить обучение
          </Text>
          <div className={styles.vector}>
            <Vector1 />
          </div>
        </li>

        <li className={styles.item}>
          <Text size="l" className={styles.title}>
            Заменим преподавателя при необходимости
          </Text>
          <Text size="s" className={styles.description}>
            Подберем нового учителя, если захотите попробовать с кем-то другим
          </Text>
          <div className={styles.vector2}>
            <Vector2 />
          </div>
        </li>
      </ul>
    </section>
  )
}

export default AddOpportunity
