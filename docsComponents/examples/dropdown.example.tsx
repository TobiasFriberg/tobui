import React from 'react';
import { List, Dropdown } from 'tobui';

export const DropdownExample = () => {
  const getDropDownContent = () => <div style={{ padding: '20px' }}>Any content can go inside</div>;

  return (
    <List padding>
      <Dropdown position="up" content={getDropDownContent()}>
        <div>Up</div>
      </Dropdown>
      <Dropdown position="down" content={getDropDownContent()}>
        <div>Down</div>
      </Dropdown>
      <Dropdown position="left" content={getDropDownContent()}>
        <div>Left</div>
      </Dropdown>
      <Dropdown position="right" content={getDropDownContent()}>
        <div>Right</div>
      </Dropdown>
      <Dropdown mobileModal content={getDropDownContent()}>
        <div>Dropdown that turns into a modal in mobile-view</div>
      </Dropdown>
    </List>
  );
};
