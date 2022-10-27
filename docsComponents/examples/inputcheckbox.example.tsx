import React, { useState } from 'react';
import { CheckBox, Select } from '../../components/form';

export const CheckBoxExample = () => {
  const [checked, setChecked] = useState(false);

  return <CheckBox label="Some checkbox" checked={checked} onCheck={(e) => setChecked(e)} />;
};
