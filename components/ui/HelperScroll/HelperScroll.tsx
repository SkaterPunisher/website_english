import styles from './HelperScroll.module.scss'
import cn from 'classnames'
import FingerIcon from '@/icons/finger.svg'
import { HelperScrollProps } from './HelperScroll.props'

const HelperScroll = ({ className, ...props }: HelperScrollProps) => {
  return (
    <div className={cn(styles.scrollWrapper, className)} {...props}>
      <div className={styles.hint}>
        <div className={styles.hintRectangle}></div>
        <div className={styles.wrapper}>
          <div className={cn(styles.rectangle, styles.firstRectangle)}></div>
          <div className={styles.rectangle}></div>
        </div>

        <FingerIcon className={styles.finger} />
      </div>
    </div>
  )
}

export default HelperScroll
