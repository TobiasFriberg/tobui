/// <reference types="react" />
declare type Props = {
    handleSearch: (query: string) => void;
    onClear?: () => void;
    placeholder?: string;
    label?: string;
    delay?: number;
    value?: string;
    testId?: string;
};
export declare const SearchField: ({ handleSearch, placeholder, label, delay, onClear, value, testId, }: Props) => JSX.Element;
export {};
