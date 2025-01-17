import React, { ReactNode } from 'react';
type Props = {
    title?: string;
    open?: boolean;
    name?: string;
    onClose?: () => boolean | void;
    onOpen?: () => void;
    children?: ReactNode;
    buttons?: ReactNode[];
    width?: string;
    fullscreen?: boolean;
    closeText?: string;
    className?: string;
};
export declare const Popup: ({ title, open, onClose, onOpen, name, children, buttons, width, fullscreen, closeText, className, }: Props) => React.JSX.Element | null;
export declare const sendPopupEvent: (name: string, open?: boolean) => void;
export {};
