import { lighten } from 'polished';
import styled from 'styled-components';
import { device, measurements } from '../../helpers/stylehelpers';

type StyleCardProps = {
  $wrap: boolean;
  $imagePlacement: 'top' | 'bottom' | 'left' | 'right';
};

export const StyledCard = styled.div<StyleCardProps>`
  height: 100%;
  display: flex;
  border-radius: ${(p) => p.theme.roundness};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${(p) => lighten(0.2, p.theme.colors.backgroundColor)};
  overflow: auto;
  ${(p) => p.$wrap && 'width: fit-content;'}
  ${(p) => {
    switch (p.$imagePlacement) {
      case 'top':
        return 'flex-direction: column;';
      case 'bottom':
        return 'flex-direction: column-reverse;';
      case 'left':
        return 'flex-direction: row;';
      case 'right':
        return 'flex-direction: row-reverse;';
    }
  }}

  @media ${(p) => device(p.theme).phone} {
    width: 100%;
  }
`;

export const Content = styled.div<{ $padding?: boolean }>`
  ${(p) => p.$padding && `padding: ${measurements.medium}`};
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: ${(p) => p.theme.roundness};
    display: block;
  }
`;
