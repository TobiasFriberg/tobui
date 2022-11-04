import React, { ReactNode } from 'react';
import { BadgeWrapper, StyledBadge } from './badge.style';

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

    return <StyledBadge className="tui-badge">{value}</StyledBadge>;
  };

  return (
    <BadgeWrapper>
      {renderBadge()}
      {children}
    </BadgeWrapper>
  );
};
