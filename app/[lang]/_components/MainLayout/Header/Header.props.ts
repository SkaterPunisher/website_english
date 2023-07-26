import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  dictionary: {
    Header: string;
    Theme: {
      Light: string;
      Dark: string;
    };
  };
};
