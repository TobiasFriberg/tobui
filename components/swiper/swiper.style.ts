import styled, { css, keyframes } from 'styled-components';

const leftSwipe = keyframes`
  0% { opacity: 1; right: 0; }
  100% { opacity: 0; right: 100%; }
`;
const rightSwipe = keyframes`
  0% { opacity: 1; left: 0; }
  100% { opacity: 0; left: 100%; }
`;

export const StyledSwiper = styled.div`
  touch-action: none;
  position: relative;
`;

export const TransformWrapper = styled.div<{ $swipeDir: null | 'right' | 'left' }>`
  height: 100%;
  position: relative;
  cursor: pointer;

  img,
  svg {
    touch-action: none;
    pointer-events: none;
  }

  ${(p) =>
    p.$swipeDir === 'left' &&
    css`
      animation-name: ${leftSwipe};
      animation-duration: 0.2s;
    `}

  ${(p) =>
    p.$swipeDir === 'right' &&
    css`
      animation-name: ${rightSwipe};
      animation-duration: 0.2s;
    `}
`;

export const SwiperWrapper = styled.div`
  touch-action: none;
`;

export const Content = styled.div`
  width: 100%;
  position: absolute;
`;
