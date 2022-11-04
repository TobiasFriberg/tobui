import { getContrastColor } from '../../helpers/stylehelpers';
import { darken, lighten } from 'polished';
import styled from 'styled-components';

type Type = 'success' | 'info' | 'warning' | 'error';

type NotificationProps = {
  theme: any;
  type: Type;
};

const getColor = (theme: any, type: Type) => {
  const colors = [
    {
      name: 'error',
      color: theme.colors.notificationError,
    },
    {
      name: 'success',
      color: theme.colors.notificationSuccess,
    },
    {
      name: 'warning',
      color: theme.colors.notificationWarning,
    },
    {
      name: 'info',
      color: theme.colors.notificationInfo,
    },
  ];

  const foundColor = colors.find((color) => color.name === type)?.color;

  return foundColor;

  /*
  return colors.map(
    (color) => `&.tui-${color.name} {
    .tui-notificationIcon {
        background-color: ${color.color};
        color: ${getContrastColor(theme, color.color)};
      }
      border: 1px solid ${darken(0.02, color.color)};
  }`
  );
  */
};

export const StyledNotification = styled.div<NotificationProps>`
  display: flex;
  margin: 20px 0;
  border-radius: ${(props) => props.theme.roundness};
  background-color: ${(props) => lighten(0.5, props.theme.colors.backgroundColor)};
  color: ${(props) => props.theme.colors.textColorDark};

  ${(props) => `border: 1px solid ${darken(0.02, getColor(props.theme, props.type))};`}
`;

export const Icon = styled.div<NotificationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  width: 70px;
  border-top-left-radius: calc(${(props) => props.theme.roundness} - 2);
  border-bottom-left-radius: calc(${(props) => props.theme.roundness} - 2);
  ${(props) => `
    background-color: ${getColor(props.theme, props.type)};
    color: ${getContrastColor(props.theme, getColor(props.theme, props.type))};
  `}
`;

export const Message = styled.div`
  padding: 20px;
`;
