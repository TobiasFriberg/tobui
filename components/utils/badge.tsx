import React, { ReactNode } from 'react';
import { BadgeWrapper, StyledBadge } from './badge.style';

type Props = {
  children: ReactNode;
  value: string | number;
  className?: string;
};

export const Badge = ({ children, value = '', className }: Props) => {
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
    <BadgeWrapper className={className}>
      {renderBadge()}
      {children}
    </BadgeWrapper>
  );
};
