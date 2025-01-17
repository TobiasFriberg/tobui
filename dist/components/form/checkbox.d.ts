import React from 'react';
type Props = {
    label?: string;
    checked: boolean;
    onCheck: (newValue: boolean) => void;
    checkboxPlacement?: 'left' | 'right';
    className?: string;
};
export declare const CheckBox: ({ label, checked, onCheck, checkboxPlacement, className }: Props) => React.JSX.Element;
export {};
