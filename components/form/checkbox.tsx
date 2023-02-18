import React from 'react';
import { Check } from 'react-feather';
import { CheckBoxContent, CheckBoxWrapper } from './inputfield.style';

type Props = {
  label?: string;
  checked: boolean;
  onCheck: (newValue: boolean) => void;
  checkboxPlacement?: 'left' | 'right';
};

export const CheckBox = ({ label = '', checked = false, onCheck, checkboxPlacement = 'right' }: Props) => {
  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <span>{label}</span>;
  };
  return (
    <CheckBoxWrapper $location={checkboxPlacement}>
      <label>
        {checkboxPlacement === 'right' && renderLabel()}
        <input
          className="tui-input tui-checkbox"
          type="checkbox"
          hidden
          checked={checked}
          onChange={(e) => onCheck(e.target.checked)}
        />
        <CheckBoxContent active={checked}>{checked && <Check />}</CheckBoxContent>
        {checkboxPlacement === 'left' && renderLabel()}
      </label>
    </CheckBoxWrapper>
  );
};
