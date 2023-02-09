import React, { ReactNode } from 'react';
import { StyledTick } from './tick.style';

type TickProps = {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'success' | 'warning' | 'info';
};

export const Tick = ({ children, variant }: TickProps) => {
  return (
    <StyledTick className="tui-tick" $variant={variant}>
      {children}
    </StyledTick>
  );
};
