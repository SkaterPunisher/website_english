import { MainLayoutTypes } from '@/types/MainLayoutTypes';
import { ReactNode } from 'react';

export type MainProviderProps = {
  children: ReactNode;
  dictionary: MainLayoutTypes;
};
