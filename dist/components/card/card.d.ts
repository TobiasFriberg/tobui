import React, { ReactNode } from 'react';
type CardProps = {
    children?: ReactNode;
    image?: ReactNode;
    imagePlacement?: 'top' | 'bottom' | 'left' | 'right';
    maxHeight?: number;
    wrap?: boolean;
    className?: string;
    padding?: boolean;
};
export declare const Card: ({ children, maxHeight, image, wrap, imagePlacement, className, padding, }: CardProps) => React.JSX.Element;
export {};
