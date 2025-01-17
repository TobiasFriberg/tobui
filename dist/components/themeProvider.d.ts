import React, { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    customTheme?: any;
    app?: boolean;
};
export declare const ThemeProvider: ({ children, customTheme, app }: Props) => React.JSX.Element;
export {};
