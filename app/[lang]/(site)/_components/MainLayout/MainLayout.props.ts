import { MainLayoutTypes } from '@/types/MainLayout';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type MainLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
  dictionary: MainLayoutTypes;
};