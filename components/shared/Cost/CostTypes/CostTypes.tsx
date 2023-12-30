import styles from './CostTypes.module.scss'
import cn from 'classnames'
import SingleIcon from '@/icons/cost-single.svg'
import PairIcon from '@/icons/cost-pair.svg'
import MiniIcon from '@/icons/cost-mini.svg'
import GroupIcon from '@/icons/cost-group.svg'
import Text from '@/components/ui/Text/Text'
import { CostTypesProps } from './CostTypes.props'

const CostTypes = ({ type, setType, className, ...props }: CostTypesProps) => {
  return (
    <ul className={cn(styles.types, className)} {...props}>
      <li
        className={cn(styles.type, { [styles.active]: type === 'group' })}
        onClick={() => setType('group')}
      >
        <GroupIcon />
        <Text className={styles.text} size="s">
          Группа (5-8 уч.)
        </Text>
      </li>
      <li
        className={cn(styles.type, { [styles.active]: type === 'mini' })}
        onClick={() => setType('mini')}
      >
        <MiniIcon />
        <Text className={styles.text} size="s">
          Мини-группа (3-4 уч.)
        </Text>
      </li>
      <li
        className={cn(styles.type, { [styles.active]: type === 'pair' })}
        onClick={() => setType('pair')}
      >
        <PairIcon />
        <Text className={styles.text} size="s">
          Занятиe в паре
        </Text>
      </li>
      <li
        className={cn(styles.type, { [styles.active]: type === 'single' })}
        onClick={() => setType('single')}
      >
        <SingleIcon />
        <Text className={styles.text} size="s">
          Индивидуальные занятия
        </Text>
      </li>
    </ul>
  )
}

export default CostTypes
