import React from 'react';
declare type ModalProps = {
    children: React.ReactNode;
    open: boolean;
    onClose?: () => void;
    onOpen?: () => void;
};
export declare const Modal: ({ children, onClose, onOpen, open }: ModalProps) => JSX.Element | null;
export {};
