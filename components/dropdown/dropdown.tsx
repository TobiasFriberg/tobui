import React, { ReactNode, useRef, useState } from 'react';
import { useEventListener } from '../../hooks';
import { StyledDropdown, DropdownContent, DropdownButton } from './dropdown.style';

type Props = {
  children: ReactNode;
  content: ReactNode;
};

export const Dropdown = ({ children, content }: Props) => {
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

    return <DropdownContent>{content}</DropdownContent>;
  };

  return (
    <>
      <StyledDropdown ref={dropdownRef}>
        <DropdownButton onClick={() => setExpanded(!expanded)}>{children}</DropdownButton>
        {renderContent()}
      </StyledDropdown>
    </>
  );
};
