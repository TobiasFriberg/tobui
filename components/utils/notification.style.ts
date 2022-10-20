import { getContrastColor } from '../../helpers/stylehelpers';
import { darken, lighten } from 'polished';
import styled, { keyframes } from 'styled-components';

const generateColors = (theme: any) => {
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

  return colors.map(
    (color) => `&.tui-${color.name} {
    .tui-notificationIcon {
        background-color: ${color.color};
        color: ${getContrastColor(theme, color.color)};
        border-top-left-radius: calc(${theme.roundness} - 2);
        border-bottom-left-radius: calc(${theme.roundness} - 2);
      }
      border: 1px solid ${darken(0.02, color.color)};
  }`
  );
};

type NotificationProps = {
  theme: any;
};

export const StyledNotification = styled.div<NotificationProps>`
  display: flex;
  margin: 20px 0;
  border-radius: ${(props) => props.theme.roundness};
  background-color: ${(props) => lighten(0.5, props.theme.colors.backgroundColor)};
  color: ${(props) => props.theme.colors.textColorDark};

  .tui-notificationMessage {
    padding: 20px;
  }

  .tui-notificationIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    width: 70px;
  }

  ${(props) => generateColors(props.theme)}
`;
