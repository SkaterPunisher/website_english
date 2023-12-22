import styles from './SocialLinks.module.scss'
import cn from 'classnames'
import { SocialLinksProps } from './SocialLinks.props'
import VKIcon from '@/icons/vk.svg'
import TelegramIcon from '@/icons/telegram.svg'
import InstagramIcon from '@/icons/instagram.svg'
import ViberIcon from '@/icons/viber.svg'

const SocialLinks = ({ className, ...props }: SocialLinksProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <a className={styles.icon}>
        <VKIcon />
      </a>
      <a className={styles.icon}>
        <TelegramIcon />
      </a>
      <a className={styles.icon}>
        <InstagramIcon />
      </a>
      <a className={styles.icon}>
        <ViberIcon />
      </a>
    </div>
  )
}

export default SocialLinks
