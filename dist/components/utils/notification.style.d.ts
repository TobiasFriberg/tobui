type Type = 'success' | 'info' | 'warning' | 'error';
type NotificationProps = {
    theme: any;
    type: Type;
};
export declare const StyledNotification: import("styled-components").StyledComponent<"div", any, NotificationProps, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, NotificationProps, never>;
export declare const Message: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
