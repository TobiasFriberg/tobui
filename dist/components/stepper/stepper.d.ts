import { ReactNode } from 'react';
declare type StepperProps = {
    steps: ReactNode[];
    initStep?: number;
    loop?: boolean;
    fillContent?: boolean;
};
export declare const Stepper: ({ steps, initStep, loop, fillContent }: StepperProps) => JSX.Element;
export {};
