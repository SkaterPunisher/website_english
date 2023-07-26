import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type MainLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children: React.ReactNode;
  dictionary: {
    Header: {
      Header: string;
      Theme: {
        Light: string;
        Dark: string;
      };
    };
    Footer: string;
  };
};
