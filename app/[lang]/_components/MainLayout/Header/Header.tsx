'use client';

import React from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import ThemeSwitcher from '@/ui/ThemeSwitcher/ThemeSwitcher';
import LocaleSwitcher from '@/ui/LocaleSwitcher/LocaleSwitcher';

const Header = ({ dictionary, className, ...props }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <div> {dictionary.Header}</div>
      <LocaleSwitcher />
      <ThemeSwitcher dictionary={dictionary.Theme} />
    </header>
  );
};

export default Header;
