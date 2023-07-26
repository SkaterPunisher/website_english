import React from 'react';
import { MainLayoutProps } from './MainLayout.props';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainLayout = ({ children, dictionary, ...props }: MainLayoutProps) => {
  return (
    <div {...props}>
      <Header dictionary={dictionary.Header} />
      <div>{children}</div>
      <Footer dictionary={dictionary.Footer} />
    </div>
  );
};

export default MainLayout;
