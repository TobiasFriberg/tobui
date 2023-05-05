import React from 'react';
import { CheckBoxContent, CheckBoxWrapper } from './inputfield.style';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

type Props = {
  label?: string;
  checked: boolean;
  onCheck: (newValue: boolean) => void;
  checkboxPlacement?: 'left' | 'right';
  className?: string;
};

export const CheckBox = ({ label = '', checked = false, onCheck, checkboxPlacement = 'right', className }: Props) => {
  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <span>{label}</span>;
  };
  return (
    <CheckBoxWrapper className={className} $location={checkboxPlacement}>
      <label>
        {checkboxPlacement === 'right' && renderLabel()}
        <input
          className="tui-input tui-checkbox"
          type="checkbox"
          hidden
          checked={checked}
          onChange={(e) => onCheck(e.target.checked)}
        />
        <CheckBoxContent active={checked}>{checked && <Icon path={mdiCheck} />}</CheckBoxContent>
        {checkboxPlacement === 'left' && renderLabel()}
      </label>
    </CheckBoxWrapper>
  );
};
