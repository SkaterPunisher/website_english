export interface mainLayout {
  Header: {
    Header: string;
    Theme: {
      Light: string;
      Dark: string;
    };
  };
  Footer: string;
}

export interface headerTypes extends Pick<mainLayout, 'Header'> {}

export interface themeTypes extends Pick<mainLayout, 'Theme'> {}

export interface footerTypes extends Pick<mainLayout, 'Footer'> {}
