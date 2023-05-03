import React, { ReactNode } from 'react';
import { StyledList, StyledListTitle } from './list.style';

type Props = {
  padding?: boolean;
  lines?: boolean;
  children: ReactNode;
  className?: string;
};

export const List = ({ children, padding = false, lines = false, className = '' }: Props) => {
  const getClasses = () => [className, 'tui-list', padding ? 'tui-padded' : '', lines ? 'tui-lines' : ''].join(' ');
  return (
    <StyledList $padded={padding} $lines={lines} className={getClasses()}>
      {children}
    </StyledList>
  );
};

type PropsItem = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export const ListItem = ({ children, title = '', className }: PropsItem) => {
  return (
    <div className={`${className} tui-listItem`}>
      <StyledListTitle className="tui-title">{title}</StyledListTitle>
      {children}
    </div>
  );
};
