import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { measurements } from '../../helpers/stylehelpers';

const StyledSection = styled.div<Props>`
  padding: ${measurements.extraLarge} 0;
`;

type Props = {
  children: ReactNode;
};

export const Section = ({ children }: Props) => {
  return <StyledSection className="tui-section">{children}</StyledSection>;
};
