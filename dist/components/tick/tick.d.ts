import { ReactNode } from 'react';
declare type TickProps = {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'success' | 'warning' | 'info';
    className?: string;
};
export declare const Tick: ({ children, variant, className }: TickProps) => JSX.Element;
export {};
