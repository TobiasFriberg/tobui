import styled from 'styled-components';

type ExpanderProps = {
  theme: any;
};

export const StyledExpander = styled.div<ExpanderProps>`
  .tui-expanderButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .tui-expanderContent {
    padding: 12px;
    font-size: calc(${(props) => props.theme.fontSize} * 0.85);
  }
`;
