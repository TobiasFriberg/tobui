/// <reference types="react" />
declare type Props = {
    label?: string;
    checked: boolean;
    onCheck: (newValue: boolean) => void;
    checkboxPlacement?: 'left' | 'right';
};
export declare const CheckBox: ({ label, checked, onCheck, checkboxPlacement }: Props) => JSX.Element;
export {};
