'use client'

import React, { useEffect, useState } from 'react'
import { MainLayoutProps } from './MainLayout.props'
import Header from '@/components/shared/Header/Header'
import Footer from '@/components/shared/Footer/Footer'
import styles from './MainLayout.module.scss'

const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  // Ниже для того, чтобы не было мерцания темы, если приходит не та что применена
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  // __________________________________________________________

  return (
    <>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout
