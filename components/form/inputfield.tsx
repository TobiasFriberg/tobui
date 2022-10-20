import React, { useState, ReactNode, useEffect, cloneElement, ReactElement } from 'react';
import { X } from 'react-feather';
import { StyledInputField } from './inputfield.style';

type Props = {
  value: string;
  onChange: (e: any) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  icon?: ReactElement | null;
  iconPosition?: 'left' | 'right';
  rows?: number;
  width?: string;
  className?: string;
  validator?: (value: string) => boolean;
  onClear?: () => void;
  testId?: string;
};

interface WrapperProps {
  active: boolean;
  children: ReactNode[];
  className: string;
  testId?: string;
}

export const InputField = ({
  type = 'text',
  multiline = false,
  rows = 4,
  label = '',
  value = '',
  onChange,
  className = '',
  iconPosition = 'left',
  placeholder = '',
  width = 'auto',
  validator,
  onClear,
  testId = 'input',
  ...props
}: Props) => {
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (validator) {
      handleOnChange(value);
    }
  }, []);

  const handleOnChange = (value: string) => {
    let isValid = true;

    if (validator) {
      isValid = validator(value);
    }

    setValid(isValid);
    onChange(value);
  };

  const renderInput = () => {
    if (!multiline) {
      return (
        <input type={type} value={value} onChange={(e) => handleOnChange(e.target.value)} placeholder={placeholder} />
      );
    }

    return (
      <textarea onChange={(e) => handleOnChange(e.target.value)} value={value} rows={rows} placeholder={placeholder} />
    );
  };

  const renderIcon = () => {
    if (!props.icon) {
      return null;
    }

    return cloneElement(props.icon, { size: 16 });
  };

  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <label className="tui-label">{label}</label>;
  };

  const renderClearButton = () => {
    if (!onClear || value === '') {
      return null;
    }

    return (
      <div className="tui-clearIcon" onClick={() => onClear()}>
        <X size={16} />
      </div>
    );
  };

  const getClassNames = () => ['tui-input', className, valid ? '' : 'tui-invalid'].join(' ');

  return (
    <StyledInputField data-test-id={testId} className={getClassNames()} {...props} invalid={!valid}>
      {renderLabel()}
      <div className="tui-input" style={{ maxWidth: width }}>
        <div className="tui-icon">{renderIcon()}</div>
        {renderInput()}
        {renderClearButton()}
      </div>
    </StyledInputField>
  );
};
