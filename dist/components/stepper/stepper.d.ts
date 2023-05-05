import { ReactNode } from 'react';
type StepperProps = {
    steps: ReactNode[];
    step?: number;
    loop?: boolean;
    fillContent?: boolean;
    hideArrows?: boolean;
    indicatorNavigation?: boolean;
    className?: string;
};
export declare const Stepper: ({ steps, step, loop, fillContent, hideArrows, indicatorNavigation, className, }: StepperProps) => JSX.Element;
export {};
