import styled from 'styled-components';
import { device, measurements } from '../../helpers/stylehelpers';

type FlexProps = {
  $direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  $gap?: string;
  $breakpoint?: 'tablet' | 'phone';
  $verticalAlign?: string;
  $horizontalAlign?: string;
};

export const StyledSection = styled.div`
  padding: ${measurements.extraLarge} 0;
`;

export const StyledView = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: baseline;
  flex-direction: ${(p) => p.$direction || 'row'};
  ${(p) => p.$gap && `gap: ${p.$gap};`}
  ${(p) => p.$verticalAlign && `align-items: ${p.$verticalAlign};`}
  ${(p) => p.$horizontalAlign && `justify-content: ${p.$horizontalAlign};`}

  ${(p) => {
    switch (p.$breakpoint) {
      case 'tablet':
        return `
        @media ${device(p.theme).tablet} {
          flex-direction: column;
        }`;

      case 'phone':
        return `
        @media ${device(p.theme).phone} {
          flex-direction: column;
        }`;

      default:
        return;
    }
  }}
`;
