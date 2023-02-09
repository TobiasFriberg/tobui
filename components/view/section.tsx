import React, { ReactNode } from 'react';
import { StyledSection } from './view.style';

type Props = {
  children: ReactNode;
};

export const Section = ({ children }: Props) => {
  return <StyledSection className="tui-section">{children}</StyledSection>;
};
