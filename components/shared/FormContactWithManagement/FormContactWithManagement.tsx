import styles from './FormContactWithManagement.module.scss'
import Text from '@/components/ui/Text/Text'
import Btn from '@/components/ui/Btn/Btn'
import VectorIcon_1 from '@/icons/vector-yellow-form-1.svg'
import VectorIcon_2 from '@/icons/vector-yellow-form-2.svg'

const FormContactWithManagement = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div>
          <Text size="l" className={styles.title}>
            Связь с руководством
          </Text>
          <Text size="ll" className={styles.subtitle}>
            Любые интересующие вопросы и предложения
          </Text>
        </div>

        <a href="mailto:englishinbg@gmail.com" className={styles.button}>
          <Btn color="black">Написать директору</Btn>
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
