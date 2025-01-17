import React from 'react';
export interface NotificationTypes {
    type: 'success' | 'info' | 'warning' | 'error';
    message?: string;
    children?: any;
    className?: string;
}
export declare const Notification: ({ type, message, children, className }: NotificationTypes) => React.JSX.Element | null;
