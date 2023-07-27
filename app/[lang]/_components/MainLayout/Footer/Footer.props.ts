import { footerTypes } from '@/types/mainLayout';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  dictionary: footerTypes;
};
