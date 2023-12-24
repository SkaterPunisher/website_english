'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n-config'
import styles from './LocaleSwitcher.module.scss'
import Text from '@/components/ui/Text/Text'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className={styles.wrapper}>
      {i18n.locales.map(locale => {
        return (
          <li key={locale} className={styles.item}>
            <Link href={redirectedPathName(locale)}>
              <Text size="xs" className={styles.address}>
                {locale}
              </Text>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
