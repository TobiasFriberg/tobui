/// <reference types="react" />
declare type SliderProps = {
    label?: string;
    min?: number;
    max?: number;
    value?: number;
    showPercent?: boolean;
    showValue?: boolean;
    onChange?: (percent: number, value: number) => void;
};
export declare const Slider: ({ label, min, max, value, showPercent, showValue, onChange }: SliderProps) => JSX.Element;
export {};
