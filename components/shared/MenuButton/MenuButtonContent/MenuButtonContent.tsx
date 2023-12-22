import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import styles from './MenuButtonContent.module.scss'
import cn from 'classnames'
import Text from '@/components/ui/Text/Text'
import Btn from '@/components/ui/Btn/Btn'
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks'
import ArrowDownIcon from '@/icons/chevron-down.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { linksKnowledge, linksMenu, linksOther } from '@/constants/links'
import { MenuButtonContentProps } from './MenuButtonContent.props'

const MenuButtonContent = ({ setOpen, className, ...props }: MenuButtonContentProps) => {
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
        {linksMenu.map(item => (
          <li key={item.link} className={styles.item}>
            <CustomLink href={item.link} className={styles.link} onClick={() => setOpen(false)}>
              <Text size="xl">{item.name}</Text>
            </CustomLink>
          </li>
        ))}

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
            <ul className={cn(styles.subList, { [styles.openSubList]: knowledgeContent })}>
              {linksKnowledge.map(item => (
                <li key={item.link} className={styles.subItem}>
                  <CustomLink
                    href={item.link}
                    className={styles.subLink}
                    onClick={() => setOpen(false)}
                  >
                    <Text size="l">{item.name}</Text>
                  </CustomLink>
                </li>
              ))}
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
            <ul className={cn(styles.subList, { [styles.openSubList]: otherContent })}>
              {linksOther.map(item => (
                <li key={item.link} className={styles.subItem}>
                  <CustomLink
                    href={item.link}
                    className={styles.subLink}
                    onClick={() => setOpen(false)}
                  >
                    <Text size="l">{item.name}</Text>
                  </CustomLink>
                </li>
              ))}
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
