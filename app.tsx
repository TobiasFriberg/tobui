import { ThemeProvider } from './components/themeProvider';
import { useAppState } from './docsComponents/appContext';
import Routing from './docsComponents/routing';
import React from 'react';

const App = () => {
  const { appState } = useAppState();

  return (
    <ThemeProvider customTheme={appState.theme}>
      <Routing />
    </ThemeProvider>
  );
};

export default App;
