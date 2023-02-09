import { useEventListener } from '../../hooks';
import React, { useEffect, useState, useRef } from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'react-feather';
import { Wrapper, StyledToaster, MessageGroup, Content, CloseButton } from './toaster.style';

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
    isClosing ? 'tui-toaster-closing' : '',
    closed ? 'tui-toaster-closed' : '',
    toaster.variant ? `tui-toaster-${toaster.variant}` : '',
  ].join(' ');

  const getIcon = () => {
    let icon = null;
    switch (toaster.variant) {
      case 'success':
        icon = <CheckCircle className="tui-toaster-icon" size="16" />;
        break;
      case 'error':
        icon = <AlertCircle className="tui-toaster-icon" size="16" />;
        break;
      case 'info':
        icon = <Info className="tui-toaster-icon" size="16" />;
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
      <CloseButton className="tui-toaster-close-button" onClick={() => closeToaster()}>
        <X />
      </CloseButton>
    );
  };

  return (
    <StyledToaster closed={closed} isClosing={isClosing} className={getClasses}>
      <MessageGroup>
        {getIcon()}
        <Content className="tui-toaster-content">{toaster.text}</Content>
      </MessageGroup>
      {renderCloseButton()}
    </StyledToaster>
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

  return <Wrapper className="tui-toaster">{renderToasterMessage()}</Wrapper>;
};
