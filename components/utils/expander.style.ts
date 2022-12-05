import styled, { keyframes } from 'styled-components';
import { measurements } from '../../helpers/stylehelpers';

const expanderAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ExpanderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ExpanderContent = styled.div`
  padding: ${measurements.medium};
  font-size: calc(${(props) => props.theme.fontSize} * 0.95);
  animation-name: ${expanderAnimation};
  animation-duration: 0.1s;
`;
