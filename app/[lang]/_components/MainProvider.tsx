import React, { ReactNode } from 'react';
import MainLayout from './MainLayout/MainLayout';

const MainProvider = ({
  children,
  dictionary,
}: {
  children: ReactNode;
  dictionary: {
    Header: {
      Header: string;
      Theme: {
        Light: string;
        Dark: string;
      };
    };
    Footer: string;
  };
}) => {
  return <MainLayout dictionary={dictionary}>{children}</MainLayout>;
};

export default MainProvider;
