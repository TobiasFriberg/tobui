import { List } from '../components/list';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledMenu } from './style';

type Props = {};

export const Menu = ({}: Props) => {
  return (
    <StyledMenu>
      <List padding lines>
        <NavLink to="/">Customize</NavLink>
        <NavLink to="/button">Button</NavLink>
        <NavLink to="/input">Input</NavLink>
        <NavLink to="/dropdown">Dropdown</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/modal">Modal</NavLink>
        <NavLink to="/popup">Popup</NavLink>
        <NavLink to="/toaster">Toaster</NavLink>
        <NavLink to="/util">Utils</NavLink>
        <NavLink to="/view">View</NavLink>
        <NavLink to="/hooks">Hooks</NavLink>
        <NavLink to="/theme">Theme/styling</NavLink>
      </List>
    </StyledMenu>
  );
};
