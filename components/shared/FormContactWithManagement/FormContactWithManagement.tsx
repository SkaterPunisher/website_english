import styles from './FormContactWithManagement.module.scss'
import Text from '@/components/ui/Text/Text'
import Btn from '@/components/ui/Btn/Btn'
import VectorIcon_1 from '@/icons/vector-yellow-form-1.svg'
import VectorIcon_2 from '@/icons/vector-yellow-form-2.svg'
import { FormContactWithManagementProps } from './FormContactWithManagement.props'
import cn from 'classnames'

const FormContactWithManagement = ({
  title,
  subtitle,
  btn,
  className,
  ...props
}: FormContactWithManagementProps) => {
  return (
    <section className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.contentWrapper}>
        <div>
          <Text size="l" className={styles.title}>
            {title}
          </Text>
          <Text size="ll" className={styles.subtitle}>
            {subtitle}
          </Text>
        </div>

        <a href="mailto:englishinbg@gmail.com" className={styles.button}>
          <Btn size="m" color="black">
            {btn}
          </Btn>
        </a>

        <div className={styles.icon_1}>
          <VectorIcon_1 />
        </div>
        <div className={styles.icon_2}>
          <VectorIcon_2 />
        </div>
      </div>
    </section>
  )
}

export default FormContactWithManagement
