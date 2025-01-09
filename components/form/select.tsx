import React, { useEffect, useState } from 'react';
import { InputLabel, InputWrapper, SelectIcon, StyledInputField } from './inputfield.style';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';

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
  className?: string;
};

export const Select = ({
  items = [],
  value,
  onChange,
  width = 'auto',
  label,
  disabled = false,
  testId = 'select',
  className,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const renderOptions = items.map((item, i) => (
    <option key={i} value={item.value}>
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
    <StyledInputField style={{ maxWidth: width }} data-test-id={testId} className={className}>
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
          <Icon path={mdiChevronDown} size={1} />
        </SelectIcon>
      </InputWrapper>
    </StyledInputField>
  );
};
