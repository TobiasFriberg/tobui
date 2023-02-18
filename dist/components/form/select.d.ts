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
    value?: string;
    onChange: (item: ISelectItem) => void;
    disabled?: boolean;
    testId?: string;
};
export declare const Select: ({ items, value, onChange, width, label, disabled, testId, }: SelectProps) => JSX.Element;
export {};
