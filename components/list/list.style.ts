import styled from 'styled-components';

type ListProps = {
  theme: any;
};

export const StyledList = styled.div<ListProps>`
  display: flex;
  flex-direction: column;

  &.tui-padded {
    & > *:not(:last-child) {
      padding-bottom: 12px;
    }
  }

  &.tui-lines {
    border-top: 1px solid ${(props) => props.theme.colors.grayLightMore};
    border-bottom: 1px solid ${(props) => props.theme.colors.grayLightMore};

    & > *:hover {
      background-color: ${(props) => props.theme.colors.grayLightEvenMore};
    }
    & > *:not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.colors.grayLightMore};
    }

    &.tui-padded {
      & > * {
        padding: 12px 8px;
      }
    }
  }

  .tui-listItem {
    .tui-title {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 6px;
    }
  }
`;
