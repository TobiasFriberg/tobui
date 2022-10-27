import React from 'react';
import { Dropdown } from '../../components/dropdown';

export const ListExample = () => {
  const getDropDownContent = () => <div>Content goes here...</div>;

  return (
    <Dropdown content={getDropDownContent()}>
      <div>Click me</div>
    </Dropdown>
  );
};
