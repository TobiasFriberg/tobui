import { ThemeProvider } from './components/themeProvider';
import { Toaster } from './components/toaster';
import { useAppState } from './docsComponents/appContext';
import Routing from './docsComponents/routing';
import { GlobalStyle } from './globalStyles';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyling = createGlobalStyle`${GlobalStyle}`;

const App = () => {
  const { appState } = useAppState();

  return (
    <ThemeProvider customTheme={appState.theme}>
      <GlobalStyling />
      <Toaster />
      <Routing />
    </ThemeProvider>
  );
};

export default App;
