import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    value: string | number;
    className?: string;
};
export declare const Badge: ({ children, value, className }: Props) => JSX.Element | null;
export {};
