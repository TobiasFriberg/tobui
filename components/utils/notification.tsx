import React from 'react';
import { Icon as IconStyle, Message, StyledNotification } from './notification.style';
import Icon from '@mdi/react';
import { mdiAlert, mdiCheck, mdiInformation } from '@mdi/js';

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
        icon = <Icon path={mdiCheck} size={1} />;
        break;
      case 'info':
        icon = <Icon path={mdiInformation} size={1} />;
        break;
      case 'warning':
        icon = <Icon path={mdiAlert} size={1} />;
        break;
      case 'error':
        icon = <Icon path={mdiAlert} size={1} />;
        break;
      default:
        icon = '';
    }

    return icon;
  };

  return (
    <StyledNotification type={type} className={`${className} tui-notification tui-${type}`}>
      <IconStyle type={type} className="tui-notification-icon">
        {renderIcon()}
      </IconStyle>
      <Message className="tui-notification-message">{children || message}</Message>
    </StyledNotification>
  );
};
