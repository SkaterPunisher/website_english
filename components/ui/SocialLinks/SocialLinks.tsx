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
      <a href="https://vk.com/englishinbogorodsk" className={styles.icon}>
        <VKIcon />
      </a>
      <a href="https://t.me/Advanced_English_Zykova" className={styles.icon}>
        <TelegramIcon />
      </a>
      <a href="https://www.instagram.com/englishschool_bg" className={styles.icon}>
        <InstagramIcon />
      </a>
      <a href="#" className={styles.icon}>
        <ViberIcon />
      </a>
    </div>
  )
}

export default SocialLinks
