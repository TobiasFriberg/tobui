import styled from 'styled-components';
import { measurements, contrastColorQuick, contrastColorQuickBorder } from '../../helpers/stylehelpers';
import { darken, lighten } from 'polished';

type ListProps = {
  theme: any;
  $padded: boolean;
  $lines: boolean;
  $edgeLines: boolean;
};

export const StyledList = styled.div<ListProps>`
  display: flex;
  flex-direction: column;

  ${(p) =>
    p.$padded &&
    `& > *:not(:last-child) {
      padding-bottom: ${measurements.medium};
    }`}

  ${(p) =>
    p.$lines &&
    `
    ${
      p.$edgeLines &&
      `
      border-top: 1px solid ${contrastColorQuickBorder(p)};
      border-bottom: 1px solid ${contrastColorQuickBorder(p)};
    `
    }

    & > *:hover {
      background-color: ${contrastColorQuickBorder(p)};
    }
    
    & > *:not(:last-child) {
      border-bottom: 1px solid ${contrastColorQuickBorder(p)};
    }

    ${
      p.$padded &&
      `& > * {
        padding: ${measurements.medium} ${measurements.small};
      }`
    }
  `}
`;

export const StyledListTitle = styled.div`
  font-size: calc(${(p) => p.theme.fontSize} * 0.9);
  font-weight: bold;
  margin-bottom: ${measurements.small};
`;
