import cn from 'classnames'
import styles from './TelegramSupport.module.scss'
import { TelegramSupportProps } from './TelegramSupport.props'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import Heading from '@/components/ui/Heading/Heading'
import Btn from '@/components/ui/Btn/Btn'
import Text from '@/components/ui/Text/Text'

const TelegramSupport = ({ className, ...props }: TelegramSupportProps) => {
  return (
    <section className={cn(styles.wrapper, 'layout', className)} {...props}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Heading tag="h2">
            Поддержка в <br />
            Telegram 24/7
          </Heading>

          <div className={styles.infoText}>
            <Text className={styles.infoTitle} size="l">
              Всегда на связи
            </Text>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.circle}>
                  <Text size="s">1</Text>
                </div>
                <Text size="s">
                  Расскажем об обучении, преподавателях, графике обучения и оплате
                </Text>
              </li>
              <li className={styles.item}>
                <div className={styles.circle}>
                  <Text size="s">2</Text>
                </div>
                <Text size="s">Поможем назначить бесплатный вводный урок</Text>
              </li>
            </ul>
          </div>

          <a
            href="https://t.me/Advanced_English_Zykova"
            target="_blank"
            className={cn(styles.button, styles.desktop)}
          >
            <Btn color="black">Написать в Telegram</Btn>
          </a>
        </div>

        <DefaultImages
          className={styles.img}
          src={'/images/allStuff.png'}
          alt={'Весь состав'}
          width={538}
          height={440}
        />

        <a
          href="https://t.me/Advanced_English_Zykova"
          target="_blank"
          className={cn(styles.button, styles.mobile)}
        >
          <Btn color="black">Написать в Telegram</Btn>
        </a>
      </div>
    </section>
  )
}

export default TelegramSupport
