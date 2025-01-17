import React, { ReactElement, ReactNode } from 'react';
type Props = {
    children?: ReactNode;
    onClick: () => void | Promise<any>;
    variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'gradient';
    className?: string;
    appearance?: 'button' | 'text' | 'border';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    iconOnly?: boolean;
    icon?: ReactElement | null;
    disabled?: boolean;
    testId?: string;
};
export declare const Button: ({ children, onClick, className, loading, icon, disabled, iconOnly, testId, ...props }: Props) => React.JSX.Element;
export {};
