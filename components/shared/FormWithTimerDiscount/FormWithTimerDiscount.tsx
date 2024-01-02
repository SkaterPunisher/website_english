'use client'

import styles from './FormWithTimerDiscount.module.scss'
import Text from '@/components/ui/Text/Text'
import Btn from '@/components/ui/Btn/Btn'
import VectorIcon_1 from '@/icons/vector-yellow-form-1.svg'
import VectorIcon_2 from '@/icons/vector-yellow-form-2.svg'
import { useApplicationStore } from '@/stores/application.store'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import cn from 'classnames'

const FormWithTimerDiscount = () => {
  const { toggleApplicationForm } = useApplicationStore()

  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = dayjs()
      const endOfDay = dayjs().endOf('day')
      const diff = endOfDay.diff(now)

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      const formattedTime = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0'),
      ].join(':')

      setTimeLeft(formattedTime)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.iconWrapper}>
          <div className={styles.timer}>
            {timeLeft.split('').map((char, index) =>
              // Для каждого символа проверяем, является ли он числом
              // Если да, то оборачиваем его в div с классом digit
              // Иначе - просто выводим символ (например, двоеточие)
              !isNaN(Number(char)) ? (
                <div key={index} className={styles.digit}>
                  {char}
                </div>
              ) : (
                char
              ),
            )}
          </div>
          <div className={styles.icon_1}>
            <VectorIcon_1 />
          </div>
        </div>

        <div>
          <Text size="l" className={styles.title}>
            Лучшая скидка в 10%
          </Text>
          <Text size="ll" className={styles.subtitle}>
            для новых учеников на все курсы
          </Text>
        </div>

        <div className={cn(styles.iconWrapper, styles.buttonWrapper)}>
          <Btn
            onClick={() => {
              toggleApplicationForm()
            }}
            className={styles.button}
            color="black"
          >
            Записаться
          </Btn>
          <div className={styles.icon_2}>
            <VectorIcon_2 />
          </div>
        </div>

        <div className={styles.icon_3}>
          <VectorIcon_1 />
        </div>
      </div>
    </section>
  )
}

export default FormWithTimerDiscount
