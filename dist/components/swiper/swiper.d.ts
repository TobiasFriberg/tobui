import React, { ReactNode } from 'react';
type StepperProps = {
    views: ReactNode[];
    sensitivity?: number;
    onSwiped?: (dir: 'left' | 'right', index: number) => void;
    step?: number;
    loop?: boolean;
    shouldSwipe?: 'left' | 'right' | null;
    height?: string;
    className?: string;
};
export declare const Swiper: ({ views, step, loop, sensitivity, onSwiped, shouldSwipe, height, className, }: StepperProps) => React.JSX.Element;
export {};
