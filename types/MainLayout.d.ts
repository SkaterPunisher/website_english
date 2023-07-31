export interface MainLayoutTypes {
  Header: {
    Header: string;
    Theme: {
      Light: string;
      Dark: string;
    };
  };
  Footer: string;
}

export interface HeaderTypes {
  Header: string;
  Theme: {
    Light: string;
    Dark: string;
  };
}

export interface ThemeTypes {
  Light: string;
  Dark: string;
}

export type FooterTypes = string;
