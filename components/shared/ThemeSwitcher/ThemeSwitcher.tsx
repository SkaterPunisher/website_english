import styles from './ThemeSwitcher.module.scss'
import { useThemeDetector } from './useThemeDetector'
import MoonIcon from '@/icons/moon.svg'
import SunIcon from '@/icons/sun.svg'

const ThemeSwitcher = () => {
  const { theme, handleChangeTheme } = useThemeDetector()

  return (
    <div className={styles.wrapper} onClick={handleChangeTheme}>
      {theme === 'light' ? (
        <div className={styles.icon}>
          <MoonIcon />
        </div>
      ) : (
        <div className={styles.icon}>
          <SunIcon />
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher
