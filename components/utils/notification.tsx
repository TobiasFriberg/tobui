import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'react-feather';
import { Icon, Message, StyledNotification } from './notification.style';

export interface NotificationTypes {
  type: 'success' | 'info' | 'warning' | 'error';
  message?: string;
  children?: any;
  className?: string;
}

export const Notification = ({ type, message, children, className }: NotificationTypes) => {
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
    <StyledNotification type={type} className={`${className} tui-notification tui-${type}`}>
      <Icon type={type} className="tui-notification-icon">
        {renderIcon()}
      </Icon>
      <Message className="tui-notification-message">{children || message}</Message>
    </StyledNotification>
  );
};
