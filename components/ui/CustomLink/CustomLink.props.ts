import { AnchorHTMLAttributes } from 'react';

export type CustomLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  href: string;
};
