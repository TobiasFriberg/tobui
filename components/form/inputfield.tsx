import React, { useState, ReactNode, useEffect, cloneElement, ReactElement } from 'react';
import { X } from 'react-feather';
import { ClearIcon, InputIcon, InputLabel, InputWrapper, StyledInputField } from './inputfield.style';

type Props = {
  value: string;
  onChange: (e: any) => void;
  autoComplete?: string;
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
  autoComplete = 'on',
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
        <input
          autoComplete={autoComplete}
          type={type}
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder={placeholder}
        />
      );
    }

    return (
      <textarea
        autoComplete={autoComplete}
        onChange={(e) => handleOnChange(e.target.value)}
        value={value}
        rows={rows}
        placeholder={placeholder}
      />
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

    return <InputLabel className="tui-label">{label}</InputLabel>;
  };

  const renderClearButton = () => {
    if (!onClear || value === '') {
      return null;
    }

    return (
      <ClearIcon className="tui-clear-icon" onClick={() => onClear()}>
        <X size={16} />
      </ClearIcon>
    );
  };

  const getClassNames = () => ['tui-input', className, valid ? '' : 'tui-input-invalid'].join(' ');

  return (
    <StyledInputField data-test-id={testId} className={getClassNames()} {...props}>
      {renderLabel()}
      <InputWrapper
        className="tui-input"
        iconPosition={props.icon ? iconPosition : undefined}
        style={{ maxWidth: width }}
        invalid={!valid}
      >
        <InputIcon position={iconPosition} className="tui-input-icon">
          {renderIcon()}
        </InputIcon>
        {renderInput()}
        {renderClearButton()}
      </InputWrapper>
    </StyledInputField>
  );
};
