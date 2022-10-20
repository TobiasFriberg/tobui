import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'react-feather';
import { StyledNotification } from './notification.style';

export interface NotificationTypes {
  type: 'success' | 'info' | 'warning' | 'error';
  message?: string;
  children?: any;
}

export const Notification = ({ type, message, children }: NotificationTypes) => {
  if (!children && !message) {
    return null;
  }

  const renderIcon = () => {
    let icon;

    switch (type) {
      case 'success':
        icon = <CheckCircle />;
        break;
      case 'info':
        icon = <Info />;
        break;
      case 'warning':
        icon = <AlertTriangle />;
        break;
      case 'error':
        icon = <AlertCircle />;
        break;
      default:
        icon = '';
    }

    return icon;
  };

  return (
    <StyledNotification className={`tui-notification tui-${type}`}>
      <div className="tui-notificationIcon">{renderIcon()}</div>
      <div className="tui-notificationMessage">{children || message}</div>
    </StyledNotification>
  );
};
