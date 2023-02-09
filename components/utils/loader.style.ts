import styled, { keyframes } from 'styled-components';
import { measurements } from '../../helpers/stylehelpers';

const spinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

type LoaderProps = {
  small?: boolean;
  light?: boolean;
  theme: any;
};

export const StyledLoader = styled.div<LoaderProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div<LoaderProps>`
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  border-left: 2px solid ${(props) => props.theme.colors.primary};
  width: ${measurements.extraLarge};
  height: ${measurements.extraLarge};
  animation-name: ${spinningAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mask-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  ${(props) => (props.light ? `border-left-color: ${props.theme.colors.textColorLight};` : '')}
  ${(props) =>
    props.small ? `width: calc(${measurements.medium} * 1.5); height: calc(${measurements.medium} * 1.5);` : ''}
`;

export const CircleFaded = styled.div<LoaderProps>`
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: ${measurements.extraLarge};
  height: ${measurements.extraLarge};
  ${(props) => (props.light ? 'border-color: rgba(255, 255, 255, 0.1);' : '')}
  ${(props) =>
    props.small ? `width: calc(${measurements.medium} * 1.5); height: calc(${measurements.medium} * 1.5);` : ''}
`;
