import styled from 'styled-components';
import { getContrastColor, getVariantColor, measurements } from '../../helpers/stylehelpers';

const getColor = (p: any) => {
  let color = p.$variant || 'grayLightMore';
  switch (p.$variant) {
    case 'danger':
      color = 'notificationError';
      break;
    case 'success':
      color = 'notificationSuccess';
      break;
    case 'warning':
      color = 'notificationWarning';
      break;
    case 'info':
      color = 'notificationInfo';
      break;
  }
  return getVariantColor(p.theme, color);
};

export const StyledTick = styled.div<{
  $variant?: 'primary' | 'secondary' | 'alternative' | 'danger' | 'success' | 'warning' | 'info';
}>`
  display: flex;
  border-radius: 20px;
  padding: ${measurements.extraSmall} ${measurements.small};
  font-size: calc(${(p) => p.theme.fontSize} * 0.8);
  width: fit-content;
  background-color: ${(p) => getColor(p)};
  color: ${(p) => getContrastColor(p.theme, getColor(p))};
`;
