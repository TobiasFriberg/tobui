import React, { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    value: string | number;
    className?: string;
};
export declare const Badge: ({ children, value, className }: Props) => React.JSX.Element | null;
export {};
