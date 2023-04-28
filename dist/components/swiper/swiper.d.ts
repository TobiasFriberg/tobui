import { ReactNode } from 'react';
declare type StepperProps = {
    views: ReactNode[];
    sensitivity?: number;
    onSwiped?: (dir: 'left' | 'right') => void;
    step?: number;
    loop?: boolean;
    shouldSwipe?: 'left' | 'right' | null;
};
export declare const Swiper: ({ views, step, loop, sensitivity, onSwiped, shouldSwipe }: StepperProps) => JSX.Element;
export {};
