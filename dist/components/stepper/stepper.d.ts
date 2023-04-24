import { ReactNode } from 'react';
declare type StepperProps = {
    steps: ReactNode[];
    initStep?: number;
    loop?: boolean;
};
export declare const Stepper: ({ steps, initStep, loop }: StepperProps) => JSX.Element;
export {};
