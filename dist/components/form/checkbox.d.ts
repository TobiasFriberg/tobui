/// <reference types="react" />
declare type Props = {
    label?: string;
    checked: boolean;
    onCheck: (newValue: boolean) => void;
};
export declare const CheckBox: ({ label, checked, onCheck }: Props) => JSX.Element;
export {};
