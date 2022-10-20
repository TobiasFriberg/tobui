import { ReactNode } from 'react';
declare type Props = {
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
};
export declare const Popup: ({ title, open, onClose, onOpen, name, children, buttons, width, fullscreen, closeText, }: Props) => JSX.Element | null;
export declare const sendPopupEvent: (name: string, open?: boolean) => void;
export {};
