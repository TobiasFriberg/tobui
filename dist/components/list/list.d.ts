import React, { ReactNode } from 'react';
type Props = {
    padding?: boolean;
    lines?: boolean;
    removeEdgeLines?: boolean;
    children: ReactNode;
    hoverHighlight?: boolean;
    className?: string;
};
export declare const List: ({ children, padding, lines, className, removeEdgeLines, hoverHighlight, }: Props) => React.JSX.Element;
type PropsItem = {
    children: ReactNode;
    title?: string;
    className?: string;
};
export declare const ListItem: ({ children, title, className }: PropsItem) => React.JSX.Element;
export {};
