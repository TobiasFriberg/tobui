import { ReactNode } from 'react';
type Props = {
    padding?: boolean;
    lines?: boolean;
    removeEdgeLines?: boolean;
    children: ReactNode;
    className?: string;
};
export declare const List: ({ children, padding, lines, className, removeEdgeLines }: Props) => JSX.Element;
type PropsItem = {
    children: ReactNode;
    title?: string;
    className?: string;
};
export declare const ListItem: ({ children, title, className }: PropsItem) => JSX.Element;
export {};
