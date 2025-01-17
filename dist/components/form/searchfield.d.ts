import React from 'react';
type Props = {
    handleSearch: (query: string) => void;
    onClear?: () => void;
    placeholder?: string;
    label?: string;
    delay?: number;
    value?: string;
    testId?: string;
    className?: string;
};
export declare const SearchField: ({ handleSearch, placeholder, label, delay, onClear, value, testId, className, }: Props) => React.JSX.Element;
export {};
