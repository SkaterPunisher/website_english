import cn from 'classnames'
import styles from './Contacts.module.scss'
import { ContactsProps } from './Contacts.props'
import YandexMap from '@/components/shared/YandexMap/YandexMap'
import Text from '@/components/ui/Text/Text'
import { contacts } from '@/constants/contacts'
import Link from 'next/link'

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
          <YandexMap key={'56.10631943.521247'} center={[56.106319, 43.521247]} zoom={18} />
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
          <YandexMap key={'5610631943521247'} center={[56.203763, 43.880141]} zoom={18} />
        </li>
      </ul>
    </div>
  )
}

export default Contacts
