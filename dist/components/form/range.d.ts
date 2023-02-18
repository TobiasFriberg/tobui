/// <reference types="react" />
declare type RangeProps = {
    label?: string;
    min?: number;
    max?: number;
    value?: number;
    showPercent?: boolean;
    showValue?: boolean;
    units?: string;
    onChange?: (percent: number, value: number) => void;
};
export declare const Range: ({ label, min, max, value, showPercent, showValue, units, onChange, }: RangeProps) => JSX.Element;
export {};
