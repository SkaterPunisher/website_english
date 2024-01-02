import Text from '@/components/ui/Text/Text'
import styles from './FreeLessonForEach.module.scss'
import CheckIcon from '@/icons/check.svg'
import { FreeLessonForEachProps } from './FreeLessonForEach.props'
import cn from 'classnames'

const FreeLessonForEach = ({ className, ...props }: FreeLessonForEachProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.wrapperIcon}>
        <CheckIcon className={styles.check} />
      </div>
      <Text size="xxs">Бесплатное пробное занятие для всех</Text>
    </div>
  )
}

export default FreeLessonForEach
