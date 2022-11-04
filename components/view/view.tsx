import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledView = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
`;

type Props = {
  children: ReactNode;
};

export const View = ({ children }: Props) => {
  return <StyledView className="tui-view">{children}</StyledView>;
};
