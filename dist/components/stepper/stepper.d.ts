import { ReactNode } from 'react';
declare type StepperProps = {
    steps: ReactNode[];
    step?: number;
    loop?: boolean;
    fillContent?: boolean;
    hideArrows?: boolean;
    indicatorNavigation?: boolean;
};
export declare const Stepper: ({ steps, step, loop, fillContent, hideArrows, indicatorNavigation, }: StepperProps) => JSX.Element;
export {};
