import { ThemeProvider } from './components/themeProvider';
import { Toaster } from './components/toaster';
import { useAppState } from './docsComponents/appContext';
import Routing from './docsComponents/routing';
import React from 'react';

const App = () => {
  const { appState } = useAppState();

  return (
    <ThemeProvider customTheme={appState.theme}>
      <Toaster />
      <Routing />
    </ThemeProvider>
  );
};

export default App;
