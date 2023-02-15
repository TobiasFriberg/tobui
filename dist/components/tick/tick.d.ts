import { ReactNode } from 'react';
declare type TickProps = {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'success' | 'warning' | 'info';
};
export declare const Tick: ({ children, variant }: TickProps) => JSX.Element;
export {};
