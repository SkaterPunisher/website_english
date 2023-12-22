import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './MenuButton.module.scss'
import { Button, DialogTrigger, Popover } from 'react-aria-components'
import { useMediaQuery } from 'react-responsive'
import MenuButtonContent from './MenuButtonContent/MenuButtonContent'

const MenuButton = () => {
  let [isOpen, setOpen] = useState(false)

  const isRight = useMediaQuery({
    query: '(min-width: 768px)',
  })

  const lineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
      translateX: 0,
      opacity: 1,
    },
    open: {
      rotate: 45,
      translateY: 4,
      translateX: 0,
      opacity: 1,
    },
  }

  const line2Variants = {
    closed: {
      rotate: 0,
      translateY: 0,
      translateX: 0,
      opacity: 1,
    },
    open: {
      rotate: -45,
      translateY: -3,
      translateX: 0,
      opacity: 1,
    },
  }

  return (
    <DialogTrigger>
      <Button onPress={() => setOpen(!isOpen)}>
        <div className={styles.icon}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="50" height="50" rx="25" fill="#F9F9F9" />
            <motion.rect
              x="13"
              y="20"
              width="24"
              height="2"
              fill="#181818"
              animate={isOpen ? 'open' : 'closed'}
              variants={lineVariants}
              initial="closed"
              transition={{ duration: 0.3 }}
            />
            <motion.rect
              x="13"
              y="27"
              width="24"
              height="2"
              fill="#181818"
              animate={isOpen ? 'open' : 'closed'}
              variants={line2Variants}
              initial="closed"
              transition={{ duration: 0.3 }}
            />
          </svg>
        </div>
      </Button>

      <Popover
        className={styles.popover}
        containerPadding={0}
        offset={!isRight ? 16 : 30}
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <MenuButtonContent setOpen={setOpen} />
      </Popover>
    </DialogTrigger>
  )
}

export default MenuButton
