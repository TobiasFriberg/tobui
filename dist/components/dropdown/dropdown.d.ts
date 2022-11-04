import { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    content: ReactNode;
    position?: 'down' | 'up' | 'left' | 'right';
    mobileModal?: boolean;
};
export declare const Dropdown: ({ children, content, position, mobileModal }: Props) => JSX.Element;
export {};
