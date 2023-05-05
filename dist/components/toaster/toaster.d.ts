/// <reference types="react" />
type Variants = 'error' | 'success' | 'info' | 'primary' | 'secondary';
type ToastMessage = {
    id?: number;
    text: string;
    sticky?: boolean;
    variant?: Variants;
    timeout?: number;
};
export declare const AddToaster: (props: ToastMessage) => void;
export declare const Toaster: () => JSX.Element;
export {};
