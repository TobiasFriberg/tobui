import React, { ReactNode, useRef, useState } from 'react';
import { useEventListener } from '../../hooks';
import { StyledDropdown, DropdownContent, DropdownButton, Blocker, DropdownWrapper } from './dropdown.style';

type Props = {
  children: ReactNode;
  content: ReactNode;
  position?: 'down' | 'up' | 'left' | 'right';
  mobileModal?: boolean;
  className?: string;
};

export const Dropdown = ({ children, content, position = 'down', mobileModal = false, className }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEvent = (e: MouseEvent) => {
    if (!expanded) {
      return;
    }

    if (dropdownRef.current && e.composedPath().includes(dropdownRef.current)) {
      return;
    }
    setExpanded(false);
  };

  useEventListener('mousedown', (e: MouseEvent) => handleMouseEvent(e));

  const renderContent = () => {
    if (!expanded) {
      return null;
    }

    return (
      <DropdownContent className={`${className} tui-dropdown-content`} modal={mobileModal} position={position}>
        {content}
      </DropdownContent>
    );
  };

  const renderBlocker = () => {
    if (!expanded) {
      return null;
    }

    if (!mobileModal) {
      return null;
    }

    return <Blocker />;
  };

  return (
    <DropdownWrapper className="tui-dropdown">
      <StyledDropdown modal={mobileModal} ref={dropdownRef}>
        <DropdownButton className="tui-dropdown-trigger" onClick={() => setExpanded(!expanded)}>
          {children}
        </DropdownButton>
        {renderContent()}
      </StyledDropdown>
      {renderBlocker()}
    </DropdownWrapper>
  );
};
