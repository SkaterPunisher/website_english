import { FooterTypes } from '@/types/MainLayoutTypes';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  dictionary: FooterTypes;
};
