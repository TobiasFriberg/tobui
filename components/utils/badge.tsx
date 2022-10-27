import React, { ReactNode } from 'react';
import { StyledBadge } from './utils.style';

type Props = {
  children: ReactNode;
  value: string | number;
};

export const Badge = ({ children, value = '' }: Props) => {
  if (!children) {
    return null;
  }

  const renderBadge = () => {
    if (!value) {
      return null;
    }

    return <div className="tui-badge">{value}</div>;
  };

  return (
    <StyledBadge>
      {renderBadge()}
      {children}
    </StyledBadge>
  );
};
