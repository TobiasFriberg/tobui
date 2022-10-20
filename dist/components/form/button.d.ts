import { ReactElement, ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    onClick: () => void | Promise<any>;
    variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'gradient';
    className?: string;
    appearance?: 'button' | 'text' | 'border';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    icon?: ReactElement | null;
    disabled?: boolean;
    testId?: string;
};
export declare const Button: ({ children, onClick, className, loading, icon, disabled, testId, ...props }: Props) => JSX.Element;
export {};
