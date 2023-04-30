import { ReactNode } from 'react';
declare type CardProps = {
    children?: ReactNode;
    image?: ReactNode;
    imagePlacement?: 'top' | 'bottom' | 'left' | 'right';
    maxHeight?: number;
    wrap?: boolean;
    className?: string;
};
export declare const Card: ({ children, maxHeight, image, wrap, imagePlacement, className }: CardProps) => JSX.Element;
export {};
