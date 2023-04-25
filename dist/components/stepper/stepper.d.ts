import { ReactNode } from 'react';
declare type StepperProps = {
    steps: ReactNode[];
    step?: number;
    loop?: boolean;
    fillContent?: boolean;
    hideArrows?: boolean;
};
export declare const Stepper: ({ steps, step, loop, fillContent, hideArrows }: StepperProps) => JSX.Element;
export {};
