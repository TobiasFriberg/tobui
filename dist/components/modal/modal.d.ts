import React from 'react';
type ModalProps = {
    children: React.ReactNode;
    open: boolean;
    fillContent?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    className?: string;
};
export declare const Modal: ({ children, onClose, onOpen, open, fillContent, className }: ModalProps) => JSX.Element | null;
export {};
