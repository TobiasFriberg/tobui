/// <reference types="react" />
export interface NotificationTypes {
    type: 'success' | 'info' | 'warning' | 'error';
    message?: string;
    children?: any;
}
export declare const Notification: ({ type, message, children }: NotificationTypes) => JSX.Element | null;
