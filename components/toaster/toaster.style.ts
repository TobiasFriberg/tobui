import { getContrastColor, measurements } from '../../helpers/stylehelpers';
import styled, { keyframes } from 'styled-components';
import { Positions, Sizes } from './toaster';

type Variants = 'error' | 'success' | 'info' | 'primary' | 'secondary';

type ToasterProps = {
  variant?: Variants;
  theme: any;
};

const toasterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const getMeasurement = (size: Sizes) => {
  switch (size) {
    case 'small':
      return measurements.small;
    case 'large':
      return measurements.large;
    default:
      return measurements.medium;
  }
};

export const Wrapper = styled.div<ToasterProps>`
  z-index: 99999;
  position: fixed;
  width: 100%;
  pointer-events: none;
  padding: 0 ${measurements.large};
  box-sizing: border-box;
  display: flex;
  bottom: 6%;
  flex-direction: column-reverse;
`;

export const StyledToaster = styled.div<{ isClosing: boolean; closed: boolean; size: Sizes; position: Positions }>`
  display: flex;
  margin: ${measurements.small} 0;
  flex-grow: 1;
  transition: 0.2s;
  padding: ${(p) => getMeasurement(p.size)};
  border-radius: ${(props) => props.theme.roundness};
  position: relative;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.grayDarkMore};
  color: ${(props) => getContrastColor(props.theme, props.theme.colors.grayDarkMore)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 1.25;
  align-items: center;
  justify-content: space-between;

  animation-name: ${toasterAnimation};
  animation-duration: 0.12s;
  animation-timing-function: linear;

  ${(props) => (props.isClosing ? `transform: translateX(100%); opacity: 0;` : '')}
  ${(props) => (props.closed ? `display: none;` : '')}
`;

export const MessageGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${measurements.medium};

  > svg {
    flex-shrink: 0;
  }
`;

export const CloseButton = styled.div`
  pointer-events: all;
  cursor: pointer;

  svg {
    display: block;
    width: calc(${(p) => p.theme.fontSize} * 1.1);
    height: calc(${(p) => p.theme.fontSize} * 1.1);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;
