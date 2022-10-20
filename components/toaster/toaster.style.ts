import { getContrastColor } from '../../helpers/stylehelpers';
import styled, { keyframes } from 'styled-components';

const getVariant = (theme: any, variant: Variants) => {
  if (!variant || variant === 'info') {
    return;
  }

  switch (variant) {
    case 'error':
      return `background-color: ${theme.colors.notificationError}`;
    case 'success':
      return `background-color: ${theme.colors.notificationSuccess}`;
    case 'primary':
      return `background-color: ${theme.colors.primary}`;
    case 'secondary':
      return `background-color: ${theme.colors.secondary}`;
  }
};

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

export const StyledToaster = styled.div<ToasterProps>`
  z-index: 99999;
  position: absolute;
  width: 100%;
  pointer-events: none;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  bottom: 100px;
  flex-direction: column-reverse;

  .tui-message {
    display: flex;
    margin: 6px 0;
    flex-grow: 1;
    transition: 0.2s;
    padding: 16px;
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

    .tui-closeButton {
      pointer-events: all;
      cursor: pointer;
    }

    .tui-messageGroup {
      display: flex;
      align-items: center;

      .tui-icon {
        margin-right: 20px;
      }
    }

    .tui-content {
      display: flex;
      align-items: center;
    }

    .icon {
      margin-right: 18px;
    }

    &.tui-closing {
      transform: translateX(100%);
      opacity: 0;
    }

    &.tui-closed {
      display: none;
    }
  }
`;
