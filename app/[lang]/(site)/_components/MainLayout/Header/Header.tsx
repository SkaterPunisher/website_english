import React from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.scss'
import cn from 'classnames'
import ThemeSwitcher from '@/ui/ThemeSwitcher/ThemeSwitcher'
import LocaleSwitcher from '@/ui/LocaleSwitcher/LocaleSwitcher'
import Link from 'next/link'

const Header = ({ dictionary, className, ...props }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <Link href="/articles">Статьи</Link>
      <Link href="/teachers">Преподаватели</Link>
      <LocaleSwitcher />
      <ThemeSwitcher dictionary={dictionary.Theme} />
    </header>
  )
}

export default Header
