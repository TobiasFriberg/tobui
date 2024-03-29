type ModalProps = {
    iconPosition?: 'left' | 'right';
    closing: boolean;
    invalid?: boolean;
    theme: any;
};
export declare const StyledModal: import("styled-components").StyledComponent<"div", any, ModalProps, never>;
export declare const CloseButton: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", any, {
    $fill?: boolean | undefined;
}, never>;
export {};
