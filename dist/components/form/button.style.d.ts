import { ReactNode } from 'react';
declare type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'gradient';
    size?: 'medium' | 'small' | 'large';
    appearance?: 'button' | 'text' | 'border';
    loading?: boolean;
    theme?: any;
    children: ReactNode;
};
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export {};
