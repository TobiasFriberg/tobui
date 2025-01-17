import React from 'react';
import { Select } from 'tobui';

export const InputSelectExample = () => (
  <Select
    items={[
      { label: 'Item 01', value: '01' },
      { label: 'Item 02', value: '02' },
    ]}
    value="02"
    onChange={() => {}}
  />
);
