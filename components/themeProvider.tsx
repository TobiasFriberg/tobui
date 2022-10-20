import React, { ReactNode } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './theme.json';

let theme = defaultTheme;

type Props = {
  children: ReactNode;
  customTheme?: any;
};

export const ThemeProvider = ({ children, customTheme = {} }: Props) => {
  theme = { ...defaultTheme, ...customTheme };
  theme.colors = { ...defaultTheme.colors, ...(customTheme.colors || {}) };
  return <Provider theme={theme}>{children}</Provider>;
};
