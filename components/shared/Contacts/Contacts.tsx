import cn from 'classnames'
import styles from './Contacts.module.scss'
import { ContactsProps } from './Contacts.props'
import Text from '@/components/ui/Text/Text'
import { contacts } from '@/constants/contacts'
import Link from 'next/link'
import YandexMapBG from '../YandexMapBG/YandexMapBG'
import YandexMapNov from '../YandexMapNov/YandexMapNov'

const Contacts = ({ className, ...props }: ContactsProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <ul className={styles.contacts}>
        <li className={styles.item}>
          <a href={contacts.email.link} className={styles.a}>
            <Text className={styles.link} size="ll">
              {contacts.email.name}
            </Text>
            <Text size="s">Любые вопросы</Text>
          </a>
        </li>
        <li className={styles.item}>
          <a href={contacts.phone.link} className={styles.a}>
            <Text className={styles.link} size="ll">
              {contacts.phone.name}
            </Text>
            <Text size="s">Отвечаем с 10:00 до 20:00</Text>
          </a>
        </li>
      </ul>

      <ul className={styles.maps}>
        <li className={styles.map}>
          <div className={styles.address}>
            <Link target="_blank" className={styles.a} href={contacts.address1.link}>
              <Text className={styles.link} size="ll">
                {contacts.address1.name}
              </Text>
            </Link>
            <Text size="xxs">Advanced English {'>'} Богородск</Text>
          </div>
          <YandexMapBG />
        </li>
        <li className={styles.map}>
          <div className={styles.address}>
            <Link target="_blank" className={styles.a} href={contacts.address2.link}>
              <Text className={styles.link} size="ll">
                {contacts.address2.name}
              </Text>
            </Link>
            <Text size="xxs">Advanced English {'>'} Новинки</Text>
          </div>
          <YandexMapNov />
        </li>
      </ul>
    </div>
  )
}

export default Contacts
