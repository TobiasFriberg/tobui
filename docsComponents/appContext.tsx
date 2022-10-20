import React, { useState, createContext, useContext, ReactNode } from 'react';

export interface IAppContext {
  theme?: any;
}

interface IState {
  appState: IAppContext;
  setAppState: (newState: IAppContext) => void;
}

const initState: IAppContext = {
  theme: JSON.parse(localStorage.getItem('customTheme') || '{}'),
};

const AppCtx = createContext<IState>({ appState: initState, setAppState: () => {} });

export const useAppState = () => useContext(AppCtx);

type AppStateProviderType = {
  children: ReactNode;
};

export const AppStateProvider = ({ children }: AppStateProviderType) => {
  const [appState, updateAppState] = useState<IAppContext>(initState);

  const setAppState = (newState: IAppContext) => {
    const updatedState = { ...appState, ...newState };
    updateAppState(updatedState);
  };

  const renderChildren = () => {
    return children;
  };

  return <AppCtx.Provider value={{ appState, setAppState }}>{renderChildren()}</AppCtx.Provider>;
};
