import { ReactNode } from 'react';
type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'gradient';
    size?: 'medium' | 'small' | 'large';
    appearance?: 'button' | 'text' | 'border';
    loading?: boolean;
    theme?: any;
    children: ReactNode;
    $loading: boolean;
    iconOnly?: boolean;
};
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, {
    $iconOnly?: boolean | undefined;
}, never>;
export declare const Content: import("styled-components").StyledComponent<"span", any, {
    $loading: boolean;
}, never>;
export {};
