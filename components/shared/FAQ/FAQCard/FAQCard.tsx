'use client'

import styles from './FAQCard.module.scss'
import cn from 'classnames'
import Text from '@/components/ui/Text/Text'
import ArrowIcon from '@/icons/chevron-faq.svg'
import { FAQCardProps } from './FAQCard.props'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FAQCard = ({ faq, className, ...props }: FAQCardProps) => {
  const [expanded, setExpanded] = useState(false)

  const popoverRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setExpanded(false)
      }
    }

    // Добавить слушатель для кликов вне компонента
    document.addEventListener('mousedown', handleClickOutside)

    // Подчистить слушатель
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, []) // Пустой массив зависимостей означает, что эффект выполнится один раз после монтирования компонента

  return (
    <div className={cn(styles.card, className)} {...props}>
      <div className={styles.button} ref={buttonRef} onClick={() => setExpanded(!expanded)}>
        <Text size="sl" className={styles.text}>
          {faq.question}
        </Text>
        <div className={cn(styles.icon, { [styles.expanded]: expanded })}>
          <ArrowIcon />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {expanded && (
          <motion.div
            key={faq._id}
            ref={popoverRef}
            className={styles.popover}
            initial={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0, marginBottom: 0 }}
            animate={{
              opacity: 1,
              maxHeight: '600px',
              paddingTop: '24px',
              paddingBottom: '24px',
              marginBottom: '25px',
            }}
            exit={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0, marginBottom: 0 }}
            transition={{ duration: 0.2 }}
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQCard
