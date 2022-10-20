import styled, { keyframes } from 'styled-components';

type ModalProps = {
  iconPosition?: 'left' | 'right';
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
  position: absolute;
  overflow: auto;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding-bottom: calc(env(safe-area-inset-bottom) + 20px);
  padding-top: env(safe-area-inset-top);
  animation-name: ${modalAnimation};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  .tui-close {
    position: absolute;
    top: 0;
    right: 0;
  }

  &.tui-closing {
    transform: translateY(100%);
    opacity: 0;
  }

  &.tui-closed {
    display: none;
  }
`;
