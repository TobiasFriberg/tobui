import React, { useState } from 'react';
import { CheckBox } from 'tobui';

export const CheckBoxExample = () => {
  const [checked, setChecked] = useState(false);

  return <CheckBox label="Some checkbox" checked={checked} onCheck={(e) => setChecked(e)} />;
};
