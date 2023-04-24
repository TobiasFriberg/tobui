import { lighten, opacify } from 'polished';
import styled from 'styled-components';
import { device, measurements } from '../../helpers/stylehelpers';
import { Button } from '../form';

export const StepperIndicator = styled.div<{ $active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.gray};
  ${(p) => p.$active && `background-color: ${p.theme.colors.grayLight};`}
  cursor: pointer;
`;

export const NavigationButton = styled(Button)`
  @media ${(p) => device(p.theme).phone} {
    width: auto;
  }
`;

export const StepperStyle = styled.div``;

export const StepperContent = styled.div`
  padding: 0 ${measurements.medium};
`;
