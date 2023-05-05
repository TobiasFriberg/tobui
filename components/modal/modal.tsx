import React, { useEffect, useState } from 'react';
import { StyledModal, CloseButton, Content } from './modal.style';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  fillContent?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  className?: string;
};

export const Modal = ({ children, onClose, onOpen, open, fillContent, className }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (open) {
      setIsClosing(false);
      setClosed(false);
      onOpen ? onOpen() : null;
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setClosed(true);
      onClose ? onClose() : null;
    }, 250);
  };

  const renderCloseButton = () => {
    if (!onClose) {
      return null;
    }

    return (
      <CloseButton className="tui-modal-close" onClick={() => closeModal()}>
        asd
      </CloseButton>
    );
  };

  const getClasses = ['tui-modal', isClosing ? 'tui-modal-closing' : '', className].join(' ');

  if (closed) {
    return null;
  }

  return (
    <StyledModal closing={isClosing} className={getClasses}>
      {renderCloseButton()}
      <Content $fill={fillContent} className="tui-modal-content">
        {children}
      </Content>
    </StyledModal>
  );
};
