import styled, { css, keyframes } from 'styled-components';
import { contrastColorQuick, device, measurements } from '../../helpers/stylehelpers';
import { lighten } from 'polished';

type position = 'down' | 'up' | 'left' | 'right';

const getModalForDropdown = (props: any, isModal: boolean) => {
  if (!isModal) {
    return '';
  }

  return `
    @media ${device(props.theme).phone} {
      position: inherit;
    }
  `;
};

export const StyledDropdown = styled.div<{ modal: boolean }>`
  position: relative;
  display: inline-block;

  ${(props) => getModalForDropdown(props, props.modal)}
`;

export const DropdownButton = styled.div`
  cursor: pointer;
`;

const openDropdownContent = (position: position) => {
  let transformBegin = '';
  let transformEnd = '';

  switch (position) {
    case 'up':
      transformBegin = `
        transform : translateY(20px);
      `;
      transformEnd = `
        transform : translateY(0);
      `;
      break;
    case 'down':
      transformBegin = `
        transform : translateY(-20px);
      `;
      transformEnd = `
        transform : translateY(0);
      `;
      break;
    case 'left':
      transformBegin = `
        transform : translateX(20px);
      `;
      transformEnd = `
        transform : translateX(0);
      `;
      break;
    case 'right':
      transformBegin = `
        transform : translateX(-20px);
      `;
      transformEnd = `
        transform : translateX(0);
      `;
      break;

    default:
      break;
  }

  return keyframes`
    0% {
      opacity: 0;
      ${transformBegin}
    }
    50% {
      opacity: 1;
    }
    100% {
      ${transformEnd}
    }
  `;
};

const setPosition = (position: position) => {
  let positionCss = '';

  switch (position) {
    case 'up':
      positionCss = `
        left: 0;
        bottom: 100%;
        margin-bottom: ${measurements.extraSmall};
      `;
      break;
    case 'down':
      positionCss = `
        left: 0;
        top: 100%;
        margin-top: ${measurements.extraSmall};
      `;
      break;
    case 'left':
      positionCss = `
        right: 100%;
        top: 0;
        margin-right: ${measurements.extraSmall};
      `;
      break;
    case 'right':
      positionCss = `
        left: 100%;
        top: 0;
        margin-left: ${measurements.extraSmall};
      `;

    default:
      break;
  }

  return css`
    ${positionCss}
    animation-name: ${openDropdownContent(position)};
    animation-duration: 0.2s;
  `;
};

const openModal = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
`;

const getModalForContent = (isModal: boolean) => {
  if (!isModal) {
    return '';
  }

  return css`
    @media ${(p) => device(p.theme).phone} {
      animation-name: ${openModal};
      animation-duration: 0.2s;
      position: fixed;
      bottom: 0;
      min-height: 100px;
      width: 100%;
      top: unset;
      right: unset;
      left: 0;
      margin: 0;
      z-index: 110;
    }
  `;
};

export const DropdownContent = styled.div<{ position: position; modal: boolean }>`
  position: absolute;
  width: max-content;
  z-index: 25;
  background-color: ${(props) => lighten(0.2, props.theme.colors.backgroundColor)};
  border: 1px solid ${(props) => contrastColorQuick(props)};
  border-radius: ${(props) => props.theme.roundness};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);

  ${(props) => setPosition(props.position)}

  ${(props) => getModalForContent(props.modal)}
`;

export const Blocker = styled.div`
  display: none;

  @media ${(p) => device(p.theme).phone} {
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

export const DropdownWrapper = styled.div`
  display: inline-block;
`;
