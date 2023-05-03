import { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    content: ReactNode;
    position?: 'down' | 'up' | 'left' | 'right';
    mobileModal?: boolean;
    className?: string;
};
export declare const Dropdown: ({ children, content, position, mobileModal, className }: Props) => JSX.Element;
export {};
