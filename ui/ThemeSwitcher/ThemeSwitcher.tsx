import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import styles from './ThemeSwitcher.module.scss';
import { useThemeDetector } from './useThemeDetector';

const ThemeSwitcher = ({
  dictionary,
}: {
  dictionary: {
    Light: string;
    Dark: string;
  };
}) => {
  const { theme, handleChangeTheme } = useThemeDetector();

  return (
    <div className={styles.wrapper} onClick={handleChangeTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size='14px' />
      ) : (
        <IoMoon size='14px' />
      )}
      <span style={{ marginLeft: '0.75rem' }}>
        {theme === 'light' ? dictionary.Light : dictionary.Dark}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
