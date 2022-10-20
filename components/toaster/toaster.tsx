import { useEventListener } from '../../hooks';
import React, { useEffect, useState, useRef } from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'react-feather';
import { StyledToaster } from './toaster.style';

type Variants = 'error' | 'success' | 'info' | 'primary' | 'secondary';

type ToastMessage = {
  id?: number;
  text: string;
  sticky?: boolean;
  variant?: Variants;
  timeout?: number;
};

type ToasterMessageProps = {
  toaster: ToastMessage;
  onDelete: (toaster: ToastMessage) => void;
};

const ToasterMessage = ({ toaster, onDelete }: ToasterMessageProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (!toaster.sticky) {
      setTimeout(() => {
        closeToaster();
      }, toaster.timeout || 3500);
    }
  }, []);

  const closeToaster = () => {
    setIsClosing(true);
    setTimeout(() => {
      setClosed(true);
      onDelete(toaster);
    }, 250);
  };

  const getClasses = [
    'tui-message',
    isClosing ? 'tui-closing' : '',
    closed ? 'tui-closed' : '',
    toaster.variant ? `tui-${toaster.variant}` : '',
  ].join(' ');

  const getIcon = () => {
    let icon = null;
    switch (toaster.variant) {
      case 'success':
        icon = <CheckCircle className="tui-icon" size="16" />;
        break;
      case 'error':
        icon = <AlertCircle className="tui-icon" size="16" />;
        break;
      case 'info':
        icon = <Info className="tui-icon" size="16" />;
        break;
      default:
        break;
    }

    return icon;
  };

  const renderCloseButton = () => {
    if (!toaster.sticky) {
      return null;
    }
    return (
      <div className="tui-closeButton" onClick={() => closeToaster()}>
        <X size={14} />
      </div>
    );
  };

  return (
    <div className={getClasses}>
      <div className="tui-messageGroup">
        {getIcon()}
        <div className="tui-content">{toaster.text}</div>
      </div>
      {renderCloseButton()}
    </div>
  );
};

export const AddToaster = (props: ToastMessage) => {
  const event = new CustomEvent('toaster', { detail: props });
  dispatchEvent(event);
};

type ToastMessageState = {
  toaster: ToastMessage;
  visible: boolean;
};

export const Toaster = () => {
  const [messages, setMessages] = useState<ToastMessageState[]>([]);
  const stateRef = useRef<ToastMessageState[]>([]);

  useEffect(() => {
    if (messages.length <= 0) {
      return;
    }

    stateRef.current = messages;
    const visibleMessages = messages.filter((message) => message.visible);

    if (visibleMessages.length <= 0) {
      setMessages([]);
    }
  }, [messages]);

  const addToaster = (toaster: CustomEvent) => {
    const toast: ToastMessage = {
      id: Date.now() + Math.random() * 2000,
      ...toaster.detail,
    };

    const newToastToAdd = {
      toaster: toast,
      visible: true,
    };

    setMessages((messages) => [...messages, newToastToAdd]);
  };

  useEventListener('toaster', addToaster);

  const removeToaster = (toaster: ToastMessage) => {
    if (!stateRef.current) {
      return;
    }

    const newMessages = stateRef.current.map((message) => {
      if (message.toaster.id === toaster.id) {
        message.visible = false;
      }

      return message;
    });

    setMessages(newMessages);
  };

  const renderToasterMessage = () => {
    if (messages.length <= 0) {
      return null;
    }

    return messages.map((message) => (
      <ToasterMessage
        key={message.toaster.id}
        toaster={message.toaster}
        onDelete={(toaster) => removeToaster(toaster)}
      />
    ));
  };

  return <StyledToaster className="tui-toaster">{renderToasterMessage()}</StyledToaster>;
};
