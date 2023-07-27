import { useEffect, useState } from 'react';

export const useThemeDetector = () => {
  let localStorageTheme: string | null = null;

  const [theme, setTheme] = useState<string | null>(localStorageTheme);
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    localStorageTheme = localStorage.getItem('theme');

    const isDarkThemeBrowser = getCurrentTheme();

    if (localStorageTheme === null) {
      if (!theme) {
        const initialTheme = isDarkThemeBrowser ? 'dark' : 'light';
        document.body.setAttribute('data-theme', initialTheme);
        setTheme(initialTheme);
        localStorage.setItem('theme', initialTheme);
      } else {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }
    } else {
      document.body.setAttribute('data-theme', localStorageTheme!);
      setTheme(localStorageTheme);
    }
  }, [theme]);

  return { theme, handleChangeTheme };
};
