import React from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.scss'
import cn from 'classnames'
import ThemeSwitcher from '@/components/shared/ThemeSwitcher/ThemeSwitcher'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import Logo from '@/components/ui/Logo/Logo'
import MenuButton from '@/components/ui/MenuButton/MenuButton'
import Text from '@/components/ui/Text/Text'
import { usePathname } from 'next/navigation'
import BasketButton from '@/components/ui/BasketButton/BasketButton'
import Button from '@/components/ui/Button/Button'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import { useMediaQuery } from 'react-responsive'

const Header = ({ className, lang, ...props }: HeaderProps) => {
  const pathName = usePathname()

  const isRight = useMediaQuery({
    query: '(min-width: 768px)',
  })

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.menu}>
        <CustomLink href="/courses" className={styles.link}>
          <Text
            className={cn(styles.text, { [styles.active]: pathName.includes('courses') })}
            size="s"
          >
            Обучение
          </Text>
        </CustomLink>

        <CustomLink href="/cost" className={styles.link}>
          <Text
            className={cn(styles.text, { [styles.active]: pathName.includes('cost') })}
            size="s"
          >
            Цены
          </Text>
        </CustomLink>

        <MenuButton />

        <CustomLink href="/teachers" className={styles.link}>
          <Text
            className={cn(styles.text, { [styles.active]: pathName.includes('teachers') })}
            size="s"
          >
            Преподаватели
          </Text>
        </CustomLink>

        <CustomLink href="/knowledge-base" className={styles.link}>
          <Text
            className={cn(styles.text, { [styles.active]: pathName.includes('knowledge-base') })}
            size="s"
          >
            База&nbsp;знаний
          </Text>
        </CustomLink>
      </div>

      <div className={styles.cart}>
        <Button placeholder={isRight ? 'Оставить заявку' : undefined} color="purple">
          <ArrowRightIcon style={{ width: 24 }} />
        </Button>

        <CustomLink href="/cart">
          <BasketButton count={3} />
        </CustomLink>

        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header

{
  /* <LocaleSwitcher /> */
}
