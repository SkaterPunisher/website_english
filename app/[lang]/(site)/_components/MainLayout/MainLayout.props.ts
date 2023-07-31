import { MainLayoutTypes } from '@/types/MainLayoutTypes';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type MainLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
  dictionary: MainLayoutTypes;
};
