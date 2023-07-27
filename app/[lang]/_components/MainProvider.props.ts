import { mainLayout } from '@/types/mainLayout';
import { ReactNode } from 'react';

export type MainProviderProps = {
  children: ReactNode;
  dictionary: mainLayout;
};
