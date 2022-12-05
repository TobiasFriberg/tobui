import React, { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './theme.json';
import { GlobalStyle } from '../globalStyles';
import { darken } from 'polished';

let theme = defaultTheme;

type Props = {
  children: ReactNode;
  customTheme?: any;
};

export const ThemeProvider = ({ children, customTheme = {} }: Props) => {
  theme = { ...defaultTheme, ...customTheme };
  theme.colors = { ...defaultTheme.colors, ...(customTheme.colors || {}) };
  const GlobalStyling = createGlobalStyle`
  ${GlobalStyle}
  body, input, button {
    font-size: ${theme.fontSize};
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
