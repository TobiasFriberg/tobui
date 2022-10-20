import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledFillPage = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: ReactNode;
};

const FillPage = ({ children }: Props) => <StyledFillPage>{children}</StyledFillPage>;

export default FillPage;
