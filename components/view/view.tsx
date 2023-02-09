import React, { ReactNode } from 'react';
import { StyledView } from './view.style';

type Props = {
  children: ReactNode;
};

export const View = ({ children }: Props) => {
  return <StyledView className="tui-view">{children}</StyledView>;
};
