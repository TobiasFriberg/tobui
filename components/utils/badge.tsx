import { getContrastColor } from '../../helpers/stylehelpers';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledBadge = styled.div`
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

type Props = {
  children: ReactNode;
  value: string | number;
};

export const Badge = ({ children, value = '' }: Props) => {
  if (!children) {
    return null;
  }

  const renderBadge = () => {
    if (!value) {
      return null;
    }

    return <div className="tui-badge">{value}</div>;
  };

  return (
    <StyledBadge>
      {renderBadge()}
      {children}
    </StyledBadge>
  );
};
