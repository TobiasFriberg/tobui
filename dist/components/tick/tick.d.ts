import React, { ReactNode } from 'react';
type TickProps = {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'success' | 'warning' | 'info';
    className?: string;
};
export declare const Tick: ({ children, variant, className }: TickProps) => React.JSX.Element;
export {};
