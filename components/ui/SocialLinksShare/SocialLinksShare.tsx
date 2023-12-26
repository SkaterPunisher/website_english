'use client'

import styles from './SocialLinksShare.module.scss'
import cn from 'classnames'
import { SocialLinksShareProps } from './SocialLinksShare.props'
import VKIcon from '@/icons/vk.svg'
import TelegramIcon from '@/icons/telegram.svg'
import InstagramIcon from '@/icons/instagram.svg'
import ViberIcon from '@/icons/viber.svg'
import Text from '@/components/ui/Text/Text'
import {
  TelegramShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from 'react-share'
import { usePathname } from 'next/navigation'

const SocialLinksShare = ({ className, ...props }: SocialLinksShareProps) => {
  const pathname = usePathname()

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Text size="ll">Поделиться в социальных сетях</Text>
      <div className={styles.links}>
        <VKShareButton noVkLinks={true} url={`https://www.english-zykova.ru/${pathname}`}>
          <VKIcon className={styles.icon} />
        </VKShareButton>

        <TelegramShareButton url={`https://www.english-zykova.ru/${pathname}`}>
          <TelegramIcon className={styles.icon} />
        </TelegramShareButton>

        <WhatsappShareButton url={`https://www.english-zykova.ru/${pathname}`}>
          <InstagramIcon className={styles.icon} />
        </WhatsappShareButton>

        <ViberShareButton url={`https://www.english-zykova.ru/${pathname}`}>
          <ViberIcon className={styles.icon} />
        </ViberShareButton>
      </div>
    </div>
  )
}

export default SocialLinksShare
