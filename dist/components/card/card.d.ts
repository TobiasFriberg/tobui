import { ReactNode } from 'react';
declare type CardProps = {
    children?: ReactNode;
    image?: ReactNode;
    imagePlacement?: 'top' | 'bottom' | 'left' | 'right';
    maxHeight?: number;
    wrap?: boolean;
};
export declare const Card: ({ children, maxHeight, image, wrap, imagePlacement }: CardProps) => JSX.Element;
export {};
