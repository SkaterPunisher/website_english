import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import styles from './MenuButtonContent.module.scss'
import cn from 'classnames'
import Text from '@/components/ui/Text/Text'
import Btn from '@/components/ui/Btn/Btn'
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks'
import ArrowDownIcon from '@/icons/chevron-down.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'

const MenuButtonContent = () => {
  const [knowledgeContent, setKnowledgeContent] = useState(false)
  const [otherContent, setOtherContent] = useState(false)

  const handleOpenKnowledge = () => {
    setKnowledgeContent(!knowledgeContent)
  }

  const handleOpenOther = () => {
    setOtherContent(!otherContent)
  }

  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  }

  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <CustomLink href="/courses" className={styles.link}>
            <Text size="xl">Обучение</Text>
          </CustomLink>
        </li>

        <li className={styles.item}>
          <CustomLink href="/teachers" className={styles.link}>
            <Text size="xl">Преподаватели</Text>
          </CustomLink>
        </li>

        <li className={styles.item}>
          <CustomLink href="/about" className={styles.link}>
            <Text size="xl">Обо мне</Text>
          </CustomLink>
        </li>

        <li className={styles.item}>
          <CustomLink href="/cost" className={styles.link}>
            <Text size="xl">Цены</Text>
          </CustomLink>
        </li>

        <li className={styles.item}>
          <CustomLink href="/contacts" className={styles.link}>
            <Text size="xl">Контакты</Text>
          </CustomLink>
        </li>

        <li className={styles.item}>
          <div className={styles.menu} onClick={handleOpenKnowledge}>
            <Text size="xl">База&nbsp;знаний</Text>
            <div className={cn(styles.arrowWrapper, { [styles.open]: knowledgeContent })}>
              <ArrowDownIcon className={styles.arrow} />
            </div>
          </div>

          <motion.ul
            className={styles.subList}
            initial="closed"
            animate={knowledgeContent ? 'open' : 'closed'}
            variants={variants}
            transition={{ duration: 0.2 }}
          >
            <ul className={styles.subList}>
              <li>
                <CustomLink href="/knowledge-base" className={styles.subLink}>
                  <Text size="l">База знаний</Text>
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/knowledge-base/your-level" className={styles.subLink}>
                  <Text size="l">Тесты</Text>
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/knowledge-base/articles" className={styles.subLink}>
                  <Text size="l">Статьи</Text>
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/knowledge-base/self-study-courses" className={styles.subLink}>
                  <Text size="l">Курсы для самостоятельного изучения</Text>
                </CustomLink>
              </li>
            </ul>
          </motion.ul>
        </li>

        <li className={styles.item}>
          <div className={styles.menu} onClick={handleOpenOther}>
            <Text size="xl">Другое</Text>
            <div className={cn(styles.arrowWrapper, { [styles.open]: otherContent })}>
              <ArrowDownIcon className={styles.arrow} />
            </div>
          </div>

          <motion.ul
            className={styles.subList}
            initial="closed"
            animate={otherContent ? 'open' : 'closed'}
            variants={variants}
            transition={{ duration: 0.2 }}
          >
            <ul className={styles.subList}>
              <li>
                <CustomLink href="/reviews" className={styles.subLink}>
                  <Text size="l">Отзывы</Text>
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/rules-advenced-english" className={styles.subLink}>
                  <Text size="l">Правила</Text>
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/faq" className={styles.subLink}>
                  <Text size="l">Вопрос-ответ</Text>
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/agreement-advanced-english" className={styles.subLink}>
                  <Text size="l">Пользовательское соглашение</Text>
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/privacy-advanced-english" className={styles.subLink}>
                  <Text size="l">Политика конфиденциальности</Text>
                </CustomLink>
              </li>
            </ul>
          </motion.ul>
        </li>
      </ul>

      <a href={`tel:+79506253446`}>
        <Btn>+7 (950) 625-34-46</Btn>
      </a>

      <SocialLinks className={styles.links} />
    </div>
  )
}

export default MenuButtonContent
