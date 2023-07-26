import React from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import LocaleSwitcher from '../../../../../ui/LocalSwitcher/LocalSwitcher';

const Header = ({ dictionary, className, ...props }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <div> {dictionary}</div>
      <LocaleSwitcher />
    </header>
  );
};

export default Header;
