import React, { ReactNode, useEffect, useState } from 'react';
import { X } from 'react-feather';
import { useEventListener } from '../../hooks';
import { Button } from '../form';
import { StyledPopup, StyledPopupBlocker } from './popup.style';

type Props = {
  title?: string;
  open?: boolean;
  name?: string;
  onClose?: () => boolean | void;
  onOpen?: () => void;
  children?: ReactNode;
  buttons?: ReactNode[];
  width?: string;
  fullscreen?: boolean;
  closeText?: string;
};

export const Popup = ({
  title = '',
  open = false,
  onClose,
  onOpen = () => {},
  name,
  children,
  buttons,
  width = 'auto',
  fullscreen = false,
  closeText = 'Close',
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsOpen(open);
    if (open) {
      onOpen();
    }
  }, [open]);

  const closePopup = () => {
    if (onClose) {
      const couldClose = onClose();
      if (couldClose) {
        setIsOpen(false);
      }
    }
  };

  const handleEvent = (e: CustomEvent) => {
    if (!name) {
      return;
    }
    const { detail } = e;
    if (detail.name === name) {
      let open = detail.open;
      setIsOpen(open);
      if (open && onOpen) {
        onOpen();
      }
    }
  };

  useEventListener('popup', handleEvent);

  const getClasses = () => {
    return [isOpen ? 'tui-open' : 'tui-closed', fullscreen ? 'tui-fullscreen' : ''].join(' ');
  };

  const renderCloseButton = () => {
    if (!onClose) {
      return null;
    }

    return (
      <Button appearance="text" icon={<X />} variant="primary" onClick={() => closePopup()}>
        {closeText}
      </Button>
    );
  };

  const renderButtons = () => {
    if (!buttons) {
      return null;
    }

    return (
      <div className="tui-buttonGroup">
        {buttons.map((button, i) => (
          <div key={i}>{button}</div>
        ))}
      </div>
    );
  };

  const renderPopup = () => {
    if (!isOpen) {
      return null;
    }

    return (
      <StyledPopup className={getClasses()} open={isOpen}>
        <div className="tui-popupContent" style={{ width: width }}>
          <div className="tui-topBar">
            <div className="tui-title">{title}</div>
            <div>{renderCloseButton()}</div>
          </div>
          {children}
          <div className="tui-footer">
            {renderButtons()}
            <div />
          </div>
        </div>
        <StyledPopupBlocker className="tui-popupBlocker" onClick={() => closePopup()}></StyledPopupBlocker>
      </StyledPopup>
    );
  };

  return renderPopup();
};

export const sendPopupEvent = (name: string, open: boolean = true) => {
  const event = new CustomEvent('popup', { detail: { open: open, name: name } });
  dispatchEvent(event);
};
