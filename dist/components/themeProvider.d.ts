import { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    customTheme?: any;
    app?: boolean;
};
export declare const ThemeProvider: ({ children, customTheme, app }: Props) => JSX.Element;
export {};
