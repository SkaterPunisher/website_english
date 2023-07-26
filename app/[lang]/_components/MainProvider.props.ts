import { ReactNode } from 'react';

export type MainProviderProps = {
  children: ReactNode;
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
