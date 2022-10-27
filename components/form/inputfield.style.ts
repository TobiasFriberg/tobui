import { device, getContrastColor } from '../../helpers/stylehelpers';
import { darken, lighten, rgba } from 'polished';
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
          padding-right: 32px;
          padding-left: 10px;
        }
        .tui-icon {
          right: 0;
          margin-right: 10px;
        }
      }
    `;
  }

  return `
    .tui-input {
      input,
      textarea {
        padding-left: 32px;
        padding-right: 10px;
      }
    }

    .tui-icon {
      left: 0;
      margin-left: 10px;
      margin-top: 1px;
    }
  `;
};

const getInvalid = (props: InputFieldProps) => {
  if (!props.invalid) {
    return;
  }

  return `
    .tui-input {
      border: 1px solid ${props.theme.colors.notificationError};
      background-color: ${rgba(props.theme.colors.notificationError, 0.1)};

      &:hover,
      &:focus-within {
        border-color: ${darken(0.15, props.theme.colors.notificationError)};
      }
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
  margin-bottom: 6px;

  @media ${device.phone} {
    width: 100%;
  }

  label {
    padding: 8px 0 6px 0;
  }

  .tui-clearIcon {
    cursor: pointer;
    margin-right: 8px;
    margin-top: 1px;
  }

  .tui-icon {
    position: absolute;
  }

  .tui-input {
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${(props) => lighten(0.3, props.theme.colors.backgroundColor)};
    border: 1px solid ${(props) => props.theme.colors.grayLight};
    border-radius: ${(props) => props.theme.inputRoundness};
    width: 100%;

    @media ${device.phone} {
      width: 100%;
    }

    &:hover,
    &:focus-within {
      border-color: ${(props) => props.theme.colors.grayDarkMore};
    }

    input,
    textarea,
    select {
      padding: 12px;
      width: 100%;
      border: 0;
      resize: none;
      background-color: transparent;
      font-family: inherit;
      font-size: inherit;
      font-size: ${(props) => props.theme.fontSize};

      &:focus {
        outline: none;
      }
    }

    &.tui-select {
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
      }

      .tui-icon {
        right: 0;
        margin-right: 10px;
        pointer-events: none;
      }
    }
  }
  ${(props) => getIconStyle(props)}
  ${(props) => getInvalid(props)}
`;

const getCheckBoxContent = (props: any) => {
  const color = props.active ? props.theme.colors.primary : props.theme.colors.backgroundColor;

  return `
    background-color: ${color};
    color: ${getContrastColor(props.theme, color)};
    border: 1px solid ${darken(0.2, color)};
  `;
};

export const CheckBoxWrapper = styled.div`
  margin-bottom: 6px;

  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    > span {
      margin-right: 8px;
    }
  }
`;

export const CheckBoxContent = styled.div<{ active: boolean }>`
  ${(props) => getCheckBoxContent(props)}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10%;
  height: 18px;
  width: 18px;
  border-radius: ${(props) => props.theme.roundness};
  padding: 3px;

  @media ${device.phone} {
    height: 22px;
    width: 22px;
  }
`;
