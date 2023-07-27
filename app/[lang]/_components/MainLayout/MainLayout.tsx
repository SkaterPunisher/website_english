'use client';

import React, { useEffect, useState } from 'react';
import { MainLayoutProps } from './MainLayout.props';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainLayout = ({ children, dictionary, ...props }: MainLayoutProps) => {
  // Ниже для того, чтобы не было мерцания темы, если приходит не та что применена
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  // __________________________________________________________

  return (
    <div {...props}>
      <Header dictionary={dictionary.Header} />
      <div>{children}</div>
      <Footer dictionary={dictionary.Footer} />
    </div>
  );
};

export default MainLayout;
