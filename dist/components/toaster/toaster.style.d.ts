import { Positions, Sizes } from './toaster';
type Variants = 'error' | 'success' | 'info' | 'primary' | 'secondary';
type ToasterProps = {
    variant?: Variants;
    theme: any;
};
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, ToasterProps, never>;
export declare const StyledToaster: import("styled-components").StyledComponent<"div", any, {
    isClosing: boolean;
    closed: boolean;
    size: Sizes;
    position: Positions;
}, never>;
export declare const MessageGroup: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CloseButton: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
