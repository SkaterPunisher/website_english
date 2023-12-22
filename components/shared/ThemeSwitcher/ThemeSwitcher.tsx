import styles from './ThemeSwitcher.module.scss'
import { useThemeDetector } from './useThemeDetector'
import { motion, AnimatePresence } from 'framer-motion'
import MoonIcon from '@/icons/moon.svg'
import SunIcon from '@/icons/sun.svg'
import cn from 'classnames'

const ThemeSwitcher = () => {
  const { theme, handleChangeTheme } = useThemeDetector()

  const transitionSettings = {
    duration: 0.1,
    ease: 'easeInOut',
  }

  return (
    <div className={cn(styles.wrapper, 'buttonIconWrapper')} onClick={handleChangeTheme}>
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transitionSettings}
            className={styles.icon}
          >
            <MoonIcon />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transitionSettings}
            className={styles.icon}
          >
            <SunIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeSwitcher
