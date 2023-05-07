import styled from 'styled-components';
import { measurements } from '../../helpers/stylehelpers';

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
      border-top: 1px solid ${p.theme.colors.grayLightMore};
      border-bottom: 1px solid ${p.theme.colors.grayLightMore};
    `
    }

    & > *:hover {
      background-color: ${p.theme.colors.grayLightEvenMore};
    }
    
    & > *:not(:last-child) {
      border-bottom: 1px solid ${p.theme.colors.grayLightMore};
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
