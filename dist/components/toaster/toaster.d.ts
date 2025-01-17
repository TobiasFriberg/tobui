import React from 'react';
type Variants = 'error' | 'success' | 'info' | 'primary' | 'secondary';
export type Sizes = 'small' | 'medium' | 'large';
export type Positions = 'top' | 'bottom';
type ToastMessage = {
    id?: number;
    text: string;
    sticky?: boolean;
    variant?: Variants;
    timeout?: number;
    size?: Sizes;
    position?: Positions;
};
export declare const AddToaster: (props: ToastMessage) => void;
export declare const Toaster: () => React.JSX.Element;
export {};
