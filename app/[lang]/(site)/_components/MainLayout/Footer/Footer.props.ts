import { FooterTypes } from '@/types/MainLayout';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  dictionary: FooterTypes;
};
