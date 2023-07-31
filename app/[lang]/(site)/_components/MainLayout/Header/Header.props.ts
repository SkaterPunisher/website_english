import { HeaderTypes } from '@/types/MainLayoutTypes';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  dictionary: HeaderTypes;
};
