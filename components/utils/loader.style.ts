import styled, { keyframes } from 'styled-components';

const spinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

type LoaderProps = {
  theme: any;
};

export const StyledLoader = styled.div<LoaderProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    border-left: 2px solid ${(props) => props.theme.colors.primary};
    width: 40px;
    height: 40px;
    animation-name: ${spinningAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    mask-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .circleFaded {
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 40px;
    height: 40px;
  }

  &.small {
    .circle,
    .circleFaded {
      width: 20px;
      height: 20px;
    }
  }

  &.light {
    .circle {
      border-left-color: ${(props) => props.theme.colors.textColorLight};
    }

    .circleFaded {
      border-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
