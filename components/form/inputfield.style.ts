import {
  contrastColorQuick,
  contrastColorQuickBorder,
  device,
  getContrastColor,
  measurements,
} from '../../helpers/stylehelpers';
import { darken, lighten, transparentize } from 'polished';
import { ReactElement } from 'react';
import styled from 'styled-components';

const getIconStyle = (props: InputFieldProps) => {
  if (!props.icon) {
    return;
  }

  if (props.iconPosition === 'right') {
    return `
      .tui-input {
        input,
        textarea {
          padding-right: ${measurements.extraLarge};
          padding-left: ${measurements.small};
        }
        .tui-icon {
          right: 0;
          margin-right: ${measurements.small};
        }
      }
    `;
  }

  return `
    .tui-input {
      input,
      textarea {
        padding-left: ${measurements.extraLarge};
        padding-right: ${measurements.small};
      }
    }

    .tui-icon {
      left: 0;
      margin-left: ${measurements.small};
      margin-top: 1px;
    }
  `;
};

const getInvalid = (props: InputFieldProps) => {
  if (!props.invalid) {
    return;
  }

  return `
      border: 1px solid ${props.theme.colors.notificationError};
      background-color: ${transparentize(0.8, props.theme.colors.notificationError)};

      &:hover,
      &:focus-within {
        border-color: ${transparentize(0.15, props.theme.colors.notificationError)};
      }

      &:focus-within {
        box-shadow: 0px 0px 0px 3px ${transparentize(0.55, props.theme.colors.notificationError)};
      }
  `;
};

type InputFieldProps = {
  iconPosition?: 'left' | 'right';
  icon?: ReactElement | null;
  invalid?: boolean;
  theme: any;
};

export const StyledInputField = styled.div<InputFieldProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${measurements.extraSmall};

  @media ${(p) => device(p.theme).phone} {
    width: 100%;
  }

  ${(props) => getIconStyle(props)}
`;

export const InputLabel = styled.label`
  padding: ${measurements.small} 0 ${measurements.extraSmall} 0;
`;

export const ClearIcon = styled.div`
  cursor: pointer;
  margin-right: ${measurements.small};
  display: flex;
`;

export const InputIcon = styled.div<{ position?: 'right' | 'left' }>`
  position: absolute;
  display: flex;

  ${(props) => props.position === 'left' && `left: 0; margin-left: ${measurements.small};`}
  ${(props) => props.position === 'right' && `right: 0; margin-right: ${measurements.small};`}
`;

export const InputWrapper = styled.div<InputFieldProps>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => contrastColorQuick(props)};
  border: 1px solid ${(props) => contrastColorQuickBorder(props)};
  border-radius: ${(props) => props.theme.inputRoundness};
  width: 100%;

  @media ${(p) => device(p.theme).phone} {
    width: 100%;
  }

  &:hover,
  &:focus-within {
    border-color: ${(props) => props.theme.colors.grayDarkMore};
  }

  &:focus-within {
    box-shadow: 0px 0px 0px 3px ${(props) => transparentize(0.55, props.theme.colors.primary)};
  }

  input,
  textarea,
  select {
    padding: ${measurements.medium};
    width: 100%;
    border: 0;
    resize: none;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    font-size: 100%;

    ::placeholder {
      color: ${(p) => getContrastColor(p.theme, p.theme.colors.backgroundColor)};
      opacity: 0.45;
    }

    color: ${(p) => getContrastColor(p.theme, p.theme.colors.backgroundColor)};

    ${(props) =>
      props.iconPosition === 'right' &&
      `padding-right: ${measurements.extraLarge}; padding-left: ${measurements.medium};`}
    ${(props) =>
      props.iconPosition === 'left' &&
      `padding-left: ${measurements.extraLarge}; padding-right: ${measurements.medium};`}
      &:focus {
      outline: none;
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }

  ${(props) => getInvalid(props)}
`;

const getCheckBoxContent = (props: any) => {
  const color = props.active ? props.theme.colors.primary : contrastColorQuick(props);

  return `
    background-color: ${color};
    color: ${getContrastColor(props.theme, color)};
    border: 1px solid ${darken(0.2, color)};
  `;
};

export const CheckBoxWrapper = styled.div<{ $location: 'left' | 'right' }>`
  margin-bottom: ${measurements.extraSmall};

  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    > span {
      ${(p) =>
        p.$location === 'right' ? `margin-right: ${measurements.small};` : `margin-left: ${measurements.small};`}
    }
  }
`;

export const SelectWrapper = styled.div`
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
`;

export const SelectIcon = styled.div`
  position: absolute;
  height: 24px;
  right: 0;
  margin-right: ${measurements.small};
  pointer-events: none;
`;

export const CheckBoxContent = styled.div<{ active: boolean }>`
  ${(props) => getCheckBoxContent(props)}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10%;
  height: calc(${measurements.medium} * 1.5);
  width: calc(${measurements.medium} * 1.5);
  border-radius: ${(props) => props.theme.roundness};
  padding: 2px;
  flex-grow: 0;
  position: relative;

  > svg {
    position: absolute;
  }

  @media ${(p) => device(p.theme).phone} {
    height: ${measurements.large};
    width: ${measurements.large};
  }
`;
