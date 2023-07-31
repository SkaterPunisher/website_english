import { HeaderTypes } from '@/types/MainLayout';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  dictionary: HeaderTypes;
};
