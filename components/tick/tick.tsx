import React, { ReactNode } from 'react';
import { StyledTick } from './tick.style';

type TickProps = {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'success' | 'warning' | 'info';
  className?: string;
};

export const Tick = ({ children, variant, className }: TickProps) => {
  return (
    <StyledTick className={`${className} tui-tick`} $variant={variant}>
      {children}
    </StyledTick>
  );
};
