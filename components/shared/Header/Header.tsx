import React from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.scss'
import cn from 'classnames'
import ThemeSwitcher from '@/components/shared/ThemeSwitcher/ThemeSwitcher'
import LocaleSwitcher from '@/components/shared/LocaleSwitcher/LocaleSwitcher'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <CustomLink href="/articles">Статьи</CustomLink>
      <CustomLink href="/teachers">Преподаватели</CustomLink>

      <ThemeSwitcher />
    </header>
  )
}

export default Header

{
  /* <LocaleSwitcher /> */
}
