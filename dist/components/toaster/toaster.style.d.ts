declare type Variants = 'error' | 'success' | 'info' | 'primary' | 'secondary';
declare type ToasterProps = {
    variant?: Variants;
    theme: any;
};
export declare const StyledToaster: import("styled-components").StyledComponent<"div", any, ToasterProps, never>;
export {};
