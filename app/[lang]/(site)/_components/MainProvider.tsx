import React from 'react';
import MainLayout from './MainLayout/MainLayout';
import { MainProviderProps } from './MainProvider.props';

const MainProvider = ({ children, dictionary }: MainProviderProps) => {
  return <MainLayout dictionary={dictionary}>{children}</MainLayout>;
};

export default MainProvider;
