import { ReactElement } from 'react';
declare type Props = {
    value: string;
    onChange: (e: any) => void;
    label?: string;
    placeholder?: string;
    type?: string;
    multiline?: boolean;
    icon?: ReactElement | null;
    iconPosition?: 'left' | 'right';
    rows?: number;
    width?: string;
    className?: string;
    validator?: (value: string) => boolean;
    onClear?: () => void;
    testId?: string;
};
export declare const InputField: ({ type, multiline, rows, label, value, onChange, className, iconPosition, placeholder, width, validator, onClear, testId, ...props }: Props) => JSX.Element;
export {};
