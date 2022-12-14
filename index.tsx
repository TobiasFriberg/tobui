import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { AppStateProvider } from './docsComponents/appContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
root.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
