import React, { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './theme.json';
import { GlobalStyle } from '../globalStyles';
import { darken } from 'polished';

let theme = defaultTheme;

type Props = {
  children: ReactNode;
  customTheme?: any;
  app?: boolean;
};

export const ThemeProvider = ({ children, customTheme = {}, app }: Props) => {
  theme = { ...defaultTheme, ...customTheme, app: app };
  theme.colors = { ...defaultTheme.colors, ...(customTheme.colors || {}) };
  const GlobalStyling = createGlobalStyle`
  ${GlobalStyle}
  body, input, button {
    font-size: ${theme.fontSize};
  }

  h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.2rem;
}

  a {
    color: ${theme.colors.linkColor};

    &:hover {
      color: ${darken(0.2, theme.colors.linkColor)};
    }
  }
  `;
  return (
    <Provider theme={theme}>
      <GlobalStyling />
      {children}
    </Provider>
  );
};
