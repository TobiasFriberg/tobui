import { ReactNode } from 'react';
declare type StepperProps = {
    views: ReactNode[];
    sensitivity?: number;
    onSwiped?: (dir: 'left' | 'right') => void;
    step?: number;
    loop?: boolean;
};
export declare const Swiper: ({ views, step, loop, sensitivity, onSwiped }: StepperProps) => JSX.Element;
export {};
