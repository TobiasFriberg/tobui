/// <reference types="react" />
export interface ISelectItem {
    id?: string | number;
    label: string;
    value: string;
}
declare type SelectProps = {
    items: ISelectItem[];
    label?: string;
    width?: string;
    defaultValue?: string;
    onChange: (item: ISelectItem) => void;
    disabled?: boolean;
    testId?: string;
};
export declare const Select: ({ items, defaultValue, onChange, width, label, disabled, testId, }: SelectProps) => JSX.Element;
export {};
