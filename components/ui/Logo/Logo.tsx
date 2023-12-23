import React from 'react'
import LogoIcon from '@/icons/logo.svg'
import LogoRight from '@/icons/logo-right.svg'
import LogoSymbol from '@/icons/logo-symbol.svg'
import styles from './Logo.module.scss'
import { CustomLink } from '../CustomLink/CustomLink'
import { useMediaQuery } from 'react-responsive'

const Logo = ({ forFooter }: { forFooter?: boolean }) => {
  const isSymbol = useMediaQuery({
    query: '(max-width: 449px)',
  })

  const isRight = useMediaQuery({
    query: '(max-width: 768px) and (min-width: 450px)',
  })

  const isFull = useMediaQuery({
    query: '(min-width: 768px)',
  })

  if (forFooter) {
    return (
      <CustomLink href="/">
        <div className={styles.logo}>
          <LogoIcon />
        </div>
      </CustomLink>
    )
  } else {
    return (
      <CustomLink href="/">
        {isFull && (
          <div className={styles.logo}>
            <LogoIcon />
          </div>
        )}
        {isRight && (
          <div className={styles.logoRight}>
            <LogoRight />
          </div>
        )}
        {isSymbol && (
          <div className={styles.logoSymbol}>
            <LogoSymbol />
          </div>
        )}
      </CustomLink>
    )
  }
}

export default Logo
