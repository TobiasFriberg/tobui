import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';
import { InputLabel, InputWrapper, SelectIcon, StyledInputField } from './inputfield.style';

export interface ISelectItem {
  id?: string | number;
  label: string;
  value: string;
}

type SelectProps = {
  items: ISelectItem[];
  label?: string;
  width?: string;
  value?: string;
  onChange: (item: ISelectItem) => void;
  disabled?: boolean;
  testId?: string;
};

export const Select = ({
  items = [],
  value,
  onChange,
  width = 'auto',
  label,
  disabled = false,
  testId = 'select',
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const renderOptions = items.map((item, i) => (
    <option key={i} value={item.value} selected={item.value === selectedValue}>
      {item.label}
    </option>
  ));

  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <InputLabel className="tui-label">{label}</InputLabel>;
  };

  return (
    <StyledInputField style={{ maxWidth: width }} data-test-id={testId}>
      {renderLabel()}
      <InputWrapper className="tui-input tui-select">
        <select
          disabled={disabled}
          value={selectedValue}
          onChange={(e) => {
            const valueSelected = items[e.target.selectedIndex];
            setSelectedValue(valueSelected.value);
            onChange(valueSelected);
          }}
        >
          {renderOptions}
        </select>
        <SelectIcon>
          <ChevronDown className="tui-icon" />
        </SelectIcon>
      </InputWrapper>
    </StyledInputField>
  );
};
