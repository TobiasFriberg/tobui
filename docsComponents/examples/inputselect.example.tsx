import React from 'react';
import { Select } from '../../components/form';

export const InputSelectExample = () => (
  <Select
    items={[
      { label: 'Item 01', value: '01' },
      { label: 'Item 02', value: '02' },
    ]}
    defaultValue="02"
    onChange={() => {}}
  />
);
