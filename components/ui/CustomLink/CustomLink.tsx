'use client'

import Link from 'next/link'
import React, { forwardRef, useEffect, useState } from 'react'
import { CustomLinkProps } from './CustomLink.props'
import styles from './CustomLink.module.scss'
import cn from 'classnames'

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, children, className, ...props }, ref) => {
    const [locale, setLocale] = useState<string | undefined>(undefined)
    useEffect(() => {
      // Check if window is defined
      const isClient = typeof window === 'object'

      if (isClient) {
        setLocale(document.documentElement.lang)
      }
    }, [])
    // Construct the localized href by prepending the locale
    const localizedHref = locale ? `/${locale}${href}` : href

    return (
      <Link
        ref={ref}
        className={cn(styles.link, className)}
        href={localizedHref}
        passHref
        {...props}
      >
        {children}
      </Link>
    )
  },
)

CustomLink.displayName = 'CustomLink'
