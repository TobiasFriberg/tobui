import styled from 'styled-components';
import { measurements, contrastColorQuick, contrastColorQuickBorder } from '../../helpers/stylehelpers';
import { darken, lighten } from 'polished';

type ListProps = {
  theme: any;
  $padded: boolean;
  $lines: boolean;
  $edgeLines: boolean;
  $hoverHighlight: boolean;
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
    p.$hoverHighlight &&
    `& > *:hover {
      background-color: ${contrastColorQuickBorder(p)};
    }`}


    ${(p) =>
    p.$lines &&
    p.$edgeLines &&
    `
      border-top: 1px solid ${contrastColorQuickBorder(p)};
      border-bottom: 1px solid ${contrastColorQuickBorder(p)};
    `}

     ${(p) =>
    p.$padded &&
    p.$lines &&
    `& > * {
        padding: ${measurements.medium} ${measurements.small};
      }`}

  ${(p) =>
    p.$lines &&
    `
    & > *:not(:last-child) {
      border-bottom: 1px solid ${contrastColorQuickBorder(p)};
    }
  `}
`;

export const StyledListTitle = styled.div`
  font-size: calc(${(p) => p.theme.fontSize} * 0.9);
  font-weight: bold;
  margin-bottom: ${measurements.small};
`;
