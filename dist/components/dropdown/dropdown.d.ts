import React, { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    content: ReactNode;
    position?: 'down' | 'up' | 'left' | 'right';
    mobileModal?: boolean;
    className?: string;
    open?: boolean;
};
export declare const Dropdown: ({ children, content, position, mobileModal, className, open, }: Props) => React.JSX.Element;
export {};
