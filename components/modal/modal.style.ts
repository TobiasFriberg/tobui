import styled, { keyframes } from 'styled-components';
import { measurements } from '../../helpers/stylehelpers';

type ModalProps = {
  iconPosition?: 'left' | 'right';
  closing: boolean;
  invalid?: boolean;
  theme: any;
};

const modalAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledModal = styled.div<ModalProps>`
  transition: 0.2s;
  position: fixed;
  z-index: 150;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding-top: env(safe-area-inset-top);
  padding-bottom: ${measurements.medium});
  animation-name: ${modalAnimation};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  ${(props) => props.closing && `transform: translateY(100%); opacity: 0;`}
`;

export const CloseButton = styled.div`
  padding: ${measurements.medium};
  z-index: 10;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Content = styled.div<{ $fill?: boolean }>`
  padding: ${measurements.medium};
  padding-top: ${measurements.extraExtraLarge};
  height: 100%;
  z-index: 1;
  overflow: auto;
  ${(p) => p.$fill && `padding-top: ${measurements.medium};`}
`;
