import React from 'react'
import { FooterProps } from './Footer.props'
import cn from 'classnames'
import styles from './Footer.module.scss'
import Logo from '@/components/ui/Logo/Logo'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import { linksFooter } from '@/constants/links'
import Text from '@/components/ui/Text/Text'
import Btn from '@/components/ui/Btn/Btn'
import { contacts } from '@/constants/contacts'
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks'

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo forFooter={true} />
        </div>

        <ul className={styles.links}>
          {linksFooter.map((link, index) => {
            const last = index === linksFooter.length - 1

            return (
              <li key={link.link}>
                <CustomLink href={link.link} className={cn(styles.link, { [styles.last]: last })}>
                  <Text size="xs">{link.name}</Text>
                </CustomLink>
              </li>
            )
          })}
        </ul>

        <div className={styles.buttons}>
          <Text size="xs" className={styles.address}>
            <a href={contacts.address.link} target="_blank">
              {contacts.address.name}
            </a>
          </Text>

          <a href={contacts.phone.link}>
            <Btn size="xs" color="white">
              {contacts.phone.name}
            </Btn>
          </a>

          <a href={contacts.email.link}>
            <Btn size="xs" color="white">
              {contacts.email.name}
            </Btn>
          </a>

          <SocialLinks />

          <Text size="xs">
            * Instagram принадлежит компании Meta, признанной экстремистской организацией и
            запрещенной в РФ
          </Text>
        </div>

        <div className={styles.reserved}>
          <Text size="xs" className={styles.address}>
            Advanced English © — Все права защищены
          </Text>
          <Text size="xs" className={styles.address}>
            2024
          </Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer
