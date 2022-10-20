import { ReactNode } from 'react';
declare type Props = {
    padding?: boolean;
    lines?: boolean;
    children: ReactNode;
    className?: string;
};
export declare const List: ({ children, padding, lines, className }: Props) => JSX.Element;
declare type PropsItem = {
    children: ReactNode;
    title?: string;
};
export declare const ListItem: ({ children, title }: PropsItem) => JSX.Element;
export {};
