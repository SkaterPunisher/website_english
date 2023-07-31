import { MainLayoutTypes } from '@/types/MainLayout';
import { ReactNode } from 'react';

export type MainProviderProps = {
  children: ReactNode;
  dictionary: MainLayoutTypes;
};
