import React, { useEffect, useState } from 'react';
import { X } from 'react-feather';
import { StyledModal } from './modal.style';

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};

export const Modal = ({ children, onClose, onOpen, open }: ModalProps) => {
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
      <div className="tui-close" onClick={() => closeModal()}>
        <X />
      </div>
    );
  };

  const getClasses = [isClosing ? 'tui-closing' : '', closed ? 'tui-closed' : ''].join(' ');

  return (
    <StyledModal className={getClasses}>
      {renderCloseButton()}
      <div>{children}</div>
    </StyledModal>
  );
};
