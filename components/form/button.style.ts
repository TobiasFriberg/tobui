import styled from 'styled-components';
import { darken, rgba, transparentize } from 'polished';
import { device, getContrastColor, getVariantColor, measurements } from '../../helpers/stylehelpers';
import { ReactNode } from 'react';
import { StyledLoader } from '../utils/loader.style';

const getAppearance = (appearance: 'button' | 'text' | 'border' = 'button', color: string) => {
  if (appearance === 'button') {
    return `
      background: ${color};
      &:hover {
        background: ${darken(0.05, color)}
      }
    `;
  }

  let appearanceStyle = `
    color: ${color};
    background: transparent;
    &:hover {
      background: ${rgba(color, 0.1)}
    }
  `;

  if (appearance === 'border') {
    appearanceStyle = `${appearanceStyle} border: 1px solid ${color};`;
  }

  return appearanceStyle;
};

const generateVariantColor = (props: ButtonProps) => {
  if (props.variant === 'gradient') {
    return `
      color: ${getContrastColor(props.theme, props.theme.colors.primary)};
      background: linear-gradient(135deg, ${props.theme.colors.secondary} 0%, ${props.theme.colors.primary} 100%);

      &:hover {
        background: linear-gradient(
          135deg,
          ${darken(0.05, props.theme.colors.secondary)} 0%,
          ${darken(0.05, props.theme.colors.primary)} 100%
        );
      }

      &:focus {
        outline: none;
        box-shadow: 0px 0px 0px 3px ${transparentize(0.55, props.theme.colors.primary)};
      }

      ${
        props.appearance && props.appearance !== 'button'
          ? getAppearance(props.appearance, props.theme.colors.primary)
          : ''
      }
    `;
  }

  let backgroundColor = getVariantColor(props.theme, props.variant || 'gray');

  if (props.variant === 'danger') {
    backgroundColor = props.theme.colors.notificationError;
  }

  return `
      color: ${getContrastColor(props.theme, backgroundColor)};
      ${getAppearance(props.appearance, backgroundColor)}

      &:focus {
        outline: none;
        box-shadow: 0px 0px 0px 3px ${transparentize(0.55, backgroundColor)};
      }

      ${StyledLoader}{
          div:first-child {
            border-left-color: ${getContrastColor(
              props.theme,
              backgroundColor,
              props.theme.colors.textColorLight,
              props.theme.colors.primary
            )};
          }
          div:last-child {
            border-color: ${getContrastColor(
              props.theme,
              backgroundColor,
              'rgba(255, 255, 255, .2)',
              'rgba(0, 0, 0, 0.2)'
            )}
          }
        }
    `;
};

const generateButtonSize = (props: ButtonProps) => {
  if (props.size === 'small') {
    return `
      padding: ${measurements.extraSmall} ${measurements.medium};
      font-size: calc(${props.theme.fontSize} * 0.8);
    `;
  }

  if (props.size === 'large') {
    return `
      padding: ${measurements.medium} ${measurements.large};
      font-size: calc(${props.theme.fontSize} * 1.2);
    `;
  }
};

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'gradient';
  size?: 'medium' | 'small' | 'large';
  appearance?: 'button' | 'text' | 'border';
  loading?: boolean;
  theme?: any;
  children: ReactNode;
  $loading: boolean;
};

export const StyledButton = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: inherit;
  letter-spacing: 0.05em;
  transition: 0.1s;
  border: 0;
  padding: ${measurements.medium} ${measurements.large};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${(props) => props.theme.buttonRoundness || 0};
  text-decoration: none;
  position: relative;
  ${(props) => generateButtonSize(props)}
  ${(props) => generateVariantColor(props)}

  @media ${(p) => device(p.theme).phone} {
    width: 100%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:focus {
    outline: none;
  }

  ${(p) =>
    p.$loading &&
    `
    cursor: not-allowed;

    ${StyledLoader} {
      position: absolute;
    }

    ${Icon}, ${Content} {
      opacity: 0.3;
    }
  `}
`;

export const Icon = styled.div`
  display: flex;
  margin-right: ${measurements.small};
`;

export const Content = styled.span<{ $loading: boolean }>`
  display: flex;
  align-items: center;
`;
