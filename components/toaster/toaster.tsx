import { useEventListener } from '../../hooks';
import React, { useEffect, useState, useRef } from 'react';
import { Wrapper, StyledToaster, MessageGroup, Content, CloseButton } from './toaster.style';
import Icon from '@mdi/react';
import { mdiAlert, mdiCheck, mdiClose, mdiInformation } from '@mdi/js';

type Variants = 'error' | 'success' | 'info' | 'primary' | 'secondary';

export type Sizes = 'small' | 'medium' | 'large';

export type Positions = 'top' | 'bottom';

type ToastMessage = {
  id?: number;
  text: string;
  sticky?: boolean;
  variant?: Variants;
  timeout?: number;
  size?: Sizes;
  position?: Positions;
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
        icon = <Icon path={mdiCheck} size={0.8} />;
        break;
      case 'error':
        icon = <Icon path={mdiAlert} size={0.8} />;
        break;
      case 'info':
        icon = <Icon path={mdiInformation} size={0.8} />;
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
        <Icon path={mdiClose} size={0.8} />
      </CloseButton>
    );
  };

  return (
    <StyledToaster
      position={toaster.position || 'bottom'}
      size={toaster.size || 'medium'}
      closed={closed}
      isClosing={isClosing}
      className={getClasses}
    >
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
