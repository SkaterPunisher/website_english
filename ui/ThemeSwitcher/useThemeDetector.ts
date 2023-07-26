import { useEffect, useState } from 'react';

export const useThemeDetector = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>(undefined);
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const isDarkThemeBrowser = getCurrentTheme();
    console.log('useEffect THEME');
    if (theme === undefined) {
      document.body.setAttribute(
        'data-theme',
        isDarkThemeBrowser ? 'dark' : 'light'
      );
      setTheme(isDarkThemeBrowser ? 'dark' : 'light');
    } else {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return { theme, handleChangeTheme };
};
