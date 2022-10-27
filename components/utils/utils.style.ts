import styled from 'styled-components';
import { getContrastColor } from '../../helpers/stylehelpers';

export const StyledBadge = styled.div`
  position: relative;
  display: inline-block;

  .tui-badge {
    top: 0px;
    right: 0px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    line-height: 5px;
    border-radius: 11px;
    min-width: 11px;
    height: 11px;
    padding: 2px;
    background-color: ${(props) => props.theme.colors.notificationError};
    color: ${(props) => getContrastColor(props.theme, props.theme.colors.notificationError)};
  }
`;
