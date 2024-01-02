'use client'

import styles from './Cost.module.scss'
import cn from 'classnames'
import { CostProps } from './Cost.props'
import Heading from '@/components/ui/Heading/Heading'
import Vector from '@/icons/vector-purple-cost.svg'
import { useState } from 'react'
import CostTypes from './CostTypes/CostTypes'
import { costTable, defaultPrice } from '@/constants/cost'
import Text from '@/components/ui/Text/Text'
import OneMonth from '@/icons/cost-1-month.svg'
import ThreeMonth from '@/icons/cost-3-month.svg'
import SixMonth from '@/icons/cost-6-month.svg'
import Button from '@/components/ui/Button/Button'
import { showToast } from '@/components/ui/CustomToast/CustomToast'
import BasketIcon from '@/icons/shopping-bag.svg'
import CheckIcon from '@/icons/check.svg'
import HelperScroll from '@/components/ui/HelperScroll/HelperScroll'
import useDragToScroll from '@/lib/hooks/useDragToScroll'
import CostCourseSelect from './CostCourseSelect/CostCourseSelect'
import { useCostCoursesStore } from '@/stores/costCourses.store'
import FreeLessonForEach from './FreeLessonForEach/FreeLessonForEach'
import useCartStore from '@/stores/cart.store'
import { motion, AnimatePresence } from 'framer-motion'
import InBasketRow from './InBasketRow/InBasketRow'

const transitionSettings = {
  duration: 0.2,
  ease: 'easeInOut',
}

export type CostType = 'single' | 'pair' | 'mini' | 'group'

const iconArray = {
  1: <OneMonth />,
  3: <ThreeMonth />,
  6: <SixMonth />,
}
const Cost = ({ courses, className, ...props }: CostProps) => {
  const [type, setType] = useState<CostType>('group')
  const { course } = useCostCoursesStore()
  const { items, addItem } = useCartStore()

  const scrollRef = useDragToScroll()

  return (
    <>
      <section className={cn(styles.section, 'layout', className)} {...props}>
        <div className={styles.title}>
          <Heading tag="h3" className={styles.heading}>
            Какой тип занятий <br /> вас интересует?
          </Heading>
          <div className={styles.vector}>
            <Vector />
          </div>
        </div>

        <HelperScroll className={styles.helper} />

        <CostTypes type={type} setType={setType} />

        <CostCourseSelect courses={courses} className={cn(styles.mobile, styles.select)} />

        <HelperScroll />

        <ul className={styles.costs} ref={scrollRef}>
          <li className={cn(styles.itemSelect, styles.desktop)}>
            <CostCourseSelect courses={courses} />
            <Text size="s" className={styles.listItem}>
              ИНД за пропуски
            </Text>
            <Text size="s" className={styles.listItem}>
              Длительность урока
            </Text>
            <Text size="s" className={styles.listItem}>
              Формат обучения
            </Text>
            <Text size="s" className={styles.listItem}>
              Отмена занятий
            </Text>
            <Text size="s" className={styles.listItem}>
              Разговорный клуб
            </Text>
            <Text size="s" className={cn(styles.listItem, styles.lastItem)}>
              Стоимость пакета
            </Text>
            <FreeLessonForEach />
          </li>
          {costTable.map((cost, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.titleCost}>
                <Text size="l" className={styles.titleItem}>
                  {cost.time}
                </Text>
                <Text size="s" className={styles.titleItem}>
                  {cost.title}
                </Text>
              </div>
              {/* ________ */}
              <div>{iconArray[cost.icon]}</div>
              {/* ________ */}
              <div className={styles.priceWrapper}>
                <div className={styles.discount}>
                  <Text
                    className={cn(styles.discountText, {
                      [styles.discounted]: cost.discount !== 0,
                      [styles.discountYellow]: cost.icon === 1,
                      [styles.discountBlue]: cost.icon === 3,
                      [styles.discountRed]: cost.icon === 6,
                    })}
                    size="s"
                  >
                    {Math.floor((course ? course : defaultPrice).price[type] * 1.03)}
                  </Text>
                  <Text
                    size="s"
                    className={cn({
                      [styles.discountedYellow]: cost.icon === 1,
                      [styles.discountedBlue]: cost.icon === 3,
                      [styles.discountedRed]: cost.icon === 6,
                    })}
                  >
                    {cost.discount !== 0 && '-'}
                    {cost.discount}%
                  </Text>
                </div>

                <Heading tag="h2-s">
                  {course ? '' : 'от'}{' '}
                  {Math.floor((course ? course : defaultPrice).price[type] * cost.price)}₽
                </Heading>
                <Text size="s">за урок</Text>
              </div>
              {/* ________ */}
              <div className={styles.listItem}>
                {!cost.singleForPass ? <div>&mdash;</div> : <CheckIcon className={styles.check} />}
              </div>

              <Text className={styles.listItem}>{cost.timeLesson} минут</Text>

              <Text className={styles.listItem}>{cost.format}</Text>

              <div className={styles.listItem}>
                {cost.cancelLesson === 0 ? (
                  <div>&mdash;</div>
                ) : (
                  <Text>До {cost.cancelLesson} отмен</Text>
                )}
              </div>

              <div className={styles.listItem}>
                {!cost.speaking ? <div>&mdash;</div> : <CheckIcon className={styles.check} />}
              </div>

              <div className={cn(styles.finalPrice, styles.listItem)}>
                <Text>
                  от{' '}
                  {(
                    Math.floor((course ? course : defaultPrice).price[type] * cost.price) * 8
                  ).toLocaleString('ru-RU')}
                  ₽
                </Text>
                {cost.discount !== 0 && (
                  <Text size="s" className={styles.discounted}>
                    {(
                      Math.floor((course ? course : defaultPrice).price[type] * 1.03) * 8
                    ).toLocaleString('ru-RU')}
                    ₽
                  </Text>
                )}
              </div>

              <Button
                className={styles.listItem}
                placeholder={'Добавить в корзину'}
                size="xxs"
                color={cost.icon === 1 ? 'yellow' : cost.icon === 3 ? 'blue' : 'red'}
                onClick={() => {
                  if (course) {
                    addItem({
                      type: {
                        price: type,
                        period: cost.time,
                      },
                      course,
                    })
                    showToast('success', `${course.title} на ${cost.time} добавлен в корзину`)
                  } else {
                    showToast('error', `Сначала нужно выбрать курс`)
                  }
                }}
              >
                <AnimatePresence mode="wait">
                  {items.find(
                    item =>
                      item.course._id === course?._id &&
                      item.type.period === cost.time &&
                      item.type.price === type,
                  ) ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={transitionSettings}
                      className={styles.icon}
                    >
                      <CheckIcon style={{ width: 24 }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="noCheck"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={transitionSettings}
                      className={styles.icon}
                    >
                      <BasketIcon style={{ width: 24 }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </li>
          ))}
        </ul>

        <FreeLessonForEach className={styles.mobile} />
      </section>

      <AnimatePresence mode="wait">
        {items.find(item => item.course._id === course?._id) && (
          <motion.div
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transitionSettings}
            className={styles.icon}
          >
            <InBasketRow />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Cost
