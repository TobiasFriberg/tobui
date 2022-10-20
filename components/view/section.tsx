import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div<Props>`
  padding: 32px 0;
`;

type Props = {
  children: ReactNode;
};

export const Section = ({ children }: Props) => {
  return <StyledSection className="tui-section">{children}</StyledSection>;
};
